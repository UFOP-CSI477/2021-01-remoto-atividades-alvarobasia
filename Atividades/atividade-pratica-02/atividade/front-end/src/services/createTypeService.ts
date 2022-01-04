import { api } from "./api";

export const createTypeService = async (name: string, price: number) => {
  console.log(name, price);

  return await api.post(
    "/subjects",
    {
      name,
      price,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token_proto")}`,
      },
    }
  );
};
