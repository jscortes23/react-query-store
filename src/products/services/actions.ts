import { type Product, productoApi } from ".."

interface GetProductsOptions {
  filterKey?: string
}


export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<Product[]> => {
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

export const getProductById = async ({ id }: { id: number }): Promise<Product> => {

  const { data } = await productoApi.get<Product>('/products', {
    params: {
      id: id
    }
  })

  return data
}