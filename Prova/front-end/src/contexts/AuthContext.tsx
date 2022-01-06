import { createContext, PropsWithChildren, useEffect, useState } from "react";
import axios from "axios";
type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  singIn: (email: string, password: string) => void;
};

export type User = {
  id: string;
  username: string;
  name: string;
  email: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider(props: PropsWithChildren<any>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("token_vacina");
    if (user) {
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  }, []);

  async function singIn(email: string, password: string) {
    try {
      const { data } = await axios.post("http://localhost:4000/user/login", {
        username: email,
        password,
      });
      localStorage.setItem("token_vacina", data.access_token);
      localStorage.setItem("token_vacina", JSON.stringify(data));
      setUser({
        id: data.id,
        username: data.name,
        email: data.email,
        name: data.name,
      });

      setIsAuthenticated(true);
    } catch (err) {}
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, singIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
