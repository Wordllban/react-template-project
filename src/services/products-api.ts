import axios from "axios";

const http = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProducts = async () => {
  return (await http.get("/products")).data;
};

export const getProduct = async (id: number) => {
  return (await http.get(`/products/${id}`)).data;
};
