import { useQuery } from "@tanstack/react-query"
import { productActions } from ".."

interface useProdcutsOptions {
  filterKey?: string
}

export const useProdcuts = ({ filterKey }: useProdcutsOptions) => {
  const productQuery = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => productActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60
  })

  return { productQuery }
}