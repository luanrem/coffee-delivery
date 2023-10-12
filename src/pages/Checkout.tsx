import { Input } from '@/components/Input'
import SelectedCoffee from '@/components/SelectedCoffee'
import { useCartStore } from '@/hooks/card'
import {
  PiMapPinLineLight,
  PiCreditCard,
  PiBank,
  PiMoney,
  PiCurrencyDollar,
} from 'react-icons/pi'

export default function Checkout() {
  const cartList = useCartStore((state) => state.cartList)

  return (
    <div className="flex flex-wrap gap-8 px-5 md:px-32">
      <section className="flex w-full flex-col gap-4 md:w-160">
        <h2 className="font-baloo text-lg font-bold">Complete seu pedido</h2>
        <div className="flex w-full flex-col gap-8 rounded-md bg-base-card p-5 md:p-10">
          <div className="flex gap-1">
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
        <div className="flex w-full flex-col gap-8 rounded-md bg-base-card p-5 md:p-10">
          <div className="flex gap-1">
            <PiCurrencyDollar className="h-6 w-6 text-purple" />
            <div>
              <h3>Pagamento</h3>
              <p className="text-sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-base-button px-4 focus:border focus:border-purple focus:bg-purple-light md:w-48">
              <PiCreditCard className="text-purple" />
              <p className="text-base text-base-text md:text-xs">
                CARTÃO DE CRÉDITO
              </p>
            </button>
            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-base-button px-4 focus:border focus:border-purple focus:bg-purple-light md:w-48">
              <PiBank className="text-purple" />
              <p className="text-base text-base-text md:text-xs">
                CARTÃO DE DÉBITO
              </p>
            </button>
            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-md bg-base-button px-4 focus:border focus:border-purple focus:bg-purple-light md:w-48">
              <PiMoney className="text-purple" />
              <p className="text-base text-base-text md:text-xs">DINHEIRO</p>
            </button>
          </div>
        </div>
      </section>
      <section className="flex w-112 flex-col gap-4">
        <h2 className="font-baloo text-lg font-bold">Cafés selecionados</h2>
        <div className="flex w-full flex-col gap-6 rounded-md rounded-bl-[2.25rem] rounded-tr-[2.25rem] bg-base-card p-5 md:p-10">
          {cartList.map((item) => (
            <SelectedCoffee item={item} key={item.id} />
          ))}

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
