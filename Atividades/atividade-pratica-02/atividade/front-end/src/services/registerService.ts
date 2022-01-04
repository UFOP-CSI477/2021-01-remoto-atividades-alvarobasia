import { api } from "./api";

export const registerService = async (
  email: string,
  password: string,
  name: string
) => {
  const response = await api.post("/users/new", {
    email,
    password,
    name,
  });
  return response;
};
