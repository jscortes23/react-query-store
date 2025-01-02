import { useParams } from "react-router-dom"
import { ProductCard, } from ".."
import { useProdcut } from "../hooks/useProduct"
import { useEffect } from "react"


export const ProductById = () => {

  const { id } = useParams()

  const { productQuery } = useProdcut({
    id: Number(id)
  })

  useEffect(() => {
    globalThis.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>
      {productQuery.isLoading && <p>Cargando...</p>}
      {productQuery.data && <ProductCard fullDescription product={productQuery.data[0]} />}

    </div>
  )
}