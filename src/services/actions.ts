import { type Product, productoApi } from "../products"

interface GetProductsOptions {
  filterKey?: string
}


export const getProducts = async ({ filterKey }: GetProductsOptions) => {
  const { data } = await productoApi.get<Product[]>(`/products`)

  return data
}