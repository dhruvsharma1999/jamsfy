import axiosClient from "./api-handler";

//get list of products
export async function getProducts() {
  const response = await axiosClient.get(`/products`);
  return response;
}

//get single product with ID pararmer
export async function getSingleProduct(Id) {
  const response = await axiosClient.get(`/products/${Id}`);
  return response;
}
