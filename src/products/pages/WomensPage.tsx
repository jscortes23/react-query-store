import { ProductList, useProdcuts } from ".."

export const WomensPage = () => {

  const { productQuery } = useProdcuts({
    filterKey: "women's clothing"
  })

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>
      {productQuery.isLoading && <p>Cargando...</p>}
      <ProductList products={productQuery.data ?? []} />
    </div>
  )
}