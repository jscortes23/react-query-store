import { useMutation } from "@tanstack/react-query";
import { productActions } from "..";
import { toast } from "react-toastify";

export const useProductMutation = () => {
  const notify = () => toast('Se creo el producto correctament', {
    autoClose: 1000,
    type: 'success'
  })

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: () => {
      console.log("Funciona");
    },
    onSettled(data, error, variables, context) {
      notify()
    },
  })

  return mutation
}
