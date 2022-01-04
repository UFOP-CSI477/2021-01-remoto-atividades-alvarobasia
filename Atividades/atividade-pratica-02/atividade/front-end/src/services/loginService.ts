import { api } from "./api";

export const loginService = async (email: string, password: string) => {
  const response = await api.post("/users/login", {
    username: email,
    password,
  });
  return response;
};
