import { ProductList, useProdcuts } from ".."

export const MensPage = () => {

  const { productQuery } = useProdcuts({
    filterKey: "men's clothing"
  })

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {productQuery.isLoading && <p>Cargando...</p>}
      <ProductList products={productQuery.data ?? []} />

    </div>
  )
}