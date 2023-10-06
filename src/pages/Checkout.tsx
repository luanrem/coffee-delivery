export default function Checkout() {
  return (
    <div className="flex flex-wrap gap-8 px-32">
      <section className="w-160 flex flex-col gap-4">
        <h2 className="font-baloo text-lg font-bold">Complete seu pedido</h2>
        <div className="w-full rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-10">
          <p>Endereço de Entrega</p>
        </div>
      </section>
      <section className="w-112 flex flex-col gap-4">
        <h2 className="font-baloo text-lg font-bold">Cafés selecionados</h2>
        <div className="flex w-full flex-col gap-6 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-10">
          <h1>Elements on car</h1>
          <tr className="h-[1px] bg-base-button" />
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="text-sm">Total de itens</p>
              <p className="text-sm">R$ 29,70</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Entrega</p>
              <p className="text-sm">R$ 3,50</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">R$ 33,20</p>
            </div>
          </div>
          <button className="h-12 rounded-md bg-yellow text-sm font-bold text-white transition-colors hover:bg-yellow/80">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </section>
    </div>
  )
}
