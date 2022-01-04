import { api } from "./api";

export const getTypesService = async () => {
  return await api.get("/subjects");
};
