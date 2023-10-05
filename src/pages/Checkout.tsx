export default function Checkout() {
  return (
    <div className="flex flex-wrap gap-8 px-32">
      <section className="w-160 flex flex-col gap-4">
        <h2 className="font-baloo text-lg">Complete seu pedido</h2>
        <div className="w-full rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-10">
          <p>Endereço de Entrega</p>
        </div>
      </section>
      <section className="w-112 flex flex-col gap-4">
        <h2 className="font-baloo text-lg">Cafés selecionados</h2>
        <div className="flex w-full flex-col gap-6 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-10">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div className="flex justify-between">
              <p className="font-roboto">Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button className="h-12 rounded-md bg-yellow font-roboto text-sm font-bold text-white">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </section>
    </div>
  )
}
