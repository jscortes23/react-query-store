import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, productActions } from "..";
import { toast } from "react-toastify";

export const useProductMutation = () => {
  const notify = () => toast('Se creo el producto correctament', {
    autoClose: 1000,
    type: 'success'
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: (data) => {
      // queryClient.invalidateQueries({
      //   queryKey: ['products', { filterKey: data.category }]
      // })

      queryClient.setQueryData<Product[]>(
        ['products', { filterKey: data.category }],
        (oldData) => {
          if (!oldData) return [data]

          return [...oldData, data]
        }
      )
    },
    onSettled(data, error, variables, context) {
      notify()
    },
  })

  return mutation
}
