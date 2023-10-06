import { Input } from '@/components/Input'
import SelectedCoffee from '@/components/SelectedCoffee'
import { PiMapPinLineLight } from 'react-icons/pi'

export default function Checkout() {
  return (
    <div className="flex flex-wrap gap-8 px-32">
      <section className="flex w-160 flex-col gap-4">
        <h2 className="font-baloo text-lg font-bold">Complete seu pedido</h2>
        <div className="flex w-full flex-col gap-8 rounded-md bg-base-card p-10">
          <div className="flex gap-2">
            <PiMapPinLineLight className="h-6 w-6 text-yellow-dark" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p className="text-sm">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <form action="submit" className="flex flex-wrap gap-4">
            <Input.Root className="w-52">
              <Input.Control id="CEP" type="text" placeholder="CEP" />
            </Input.Root>
            <Input.Root className="w-full">
              <Input.Control id="Rua" type="text" placeholder="Rua" />
            </Input.Root>
            <Input.Root className="w-52">
              <Input.Control id="Número" type="number" placeholder="Número" />
            </Input.Root>
            <Input.Root className="grow">
              <Input.Control
                id="Complemento"
                type="text"
                placeholder="Complemento"
              />
              <Input.Sulfix>Opcional</Input.Sulfix>
            </Input.Root>
            <Input.Root className="w-52">
              <Input.Control id="Bairro" type="text" placeholder="Bairro" />
            </Input.Root>
            <Input.Root className="grow">
              <Input.Control id="Cidade" type="text" placeholder="Cidade" />
            </Input.Root>
            <Input.Root className="w-16">
              <Input.Control id="UF" type="text" placeholder="UF" />
            </Input.Root>
          </form>
        </div>
      </section>
      <section className="flex w-112 flex-col gap-4">
        <h2 className="font-baloo text-lg font-bold">Cafés selecionados</h2>
        <div className="flex w-full flex-col gap-6 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-10">
          <SelectedCoffee />
          <SelectedCoffee />
          <SelectedCoffee />

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
