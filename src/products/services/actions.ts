import { type Product, productoApi } from ".."

interface GetProductsOptions {
  filterKey?: string
}


export const getProducts = async ({ filterKey }: GetProductsOptions) => {
  // const params = new URLSearchParams()

  // if (filterKey) {
  //   params.append('category', filterKey)
  // }

  const { data } = await productoApi.get<Product[]>(`/products`, {
    params: {
      category: filterKey
    }
  })

  return data
}