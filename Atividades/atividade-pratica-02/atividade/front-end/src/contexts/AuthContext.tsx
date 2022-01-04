import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { loginService } from "../services/loginService";

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
    const user = localStorage.getItem("user_proto");
    if (user) {
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  }, []);

  async function singIn(email: string, password: string) {
    try {
      const { data } = await loginService(email, password);
      localStorage.setItem("token_proto", data.access_token);
      localStorage.setItem("user_proto", JSON.stringify(data));
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
