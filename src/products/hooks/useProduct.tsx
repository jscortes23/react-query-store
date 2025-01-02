import { useQuery } from "@tanstack/react-query"
import { productActions } from ".."

interface useProdcutsOptions {
  id: number
}

export const useProdcut = ({ id }: useProdcutsOptions) => {
  const productQuery = useQuery({
    queryKey: ['products', id],
    queryFn: () => productActions.getProductById({ id }),
    staleTime: 1000 * 60 * 60,
  })

  return { productQuery }
}