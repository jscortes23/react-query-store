import { ProductList, useProdcuts } from ".."


export const CompleteListPage = () => {

  const { productQuery } = useProdcuts({})

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>
      {productQuery.isLoading && <p>Cargando...</p>}
      <ProductList products={productQuery.data ?? []} />

    </div>
  )
}