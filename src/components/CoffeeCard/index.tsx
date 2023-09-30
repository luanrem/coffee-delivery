import Picture from '../../assets/coffeeImg/ExpressoTradicional.png'
import CheckoutCar from '../icons/CheckoutCar'
import { BiPlus, BiMinus } from 'react-icons/bi'

export default function CoffeeCard() {
  return (
    <div className="bg-base-card flex h-80 w-64 flex-col items-center justify-between rounded-md rounded-bl-[36px] rounded-tr-[36px]">
      <div className="relative -top-6 flex flex-col items-center justify-start gap-3 px-5">
        <img src={Picture} alt="" className="w-32" />
        <p className="bg-yellow-light text-yellow-dark rounded-xl p-1 px-2 font-roboto text-xs font-bold">
          TRADICIONAL
        </p>
        <h3 className="font-baloo text-xl font-bold">Expresso Tradicional</h3>
        <p className="text-base-label text-center font-roboto text-sm">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <footer className="flex w-full justify-between gap-2 px-5 pb-6">
        <div className="flex grow items-center justify-start gap-1">
          <p className="text-base-subtitle font-roboto text-sm">R$</p>
          <span className="text-base-subtitle font-baloo text-2xl font-extrabold">
            9,90
          </span>
        </div>
        <div className="bg-base-button flex h-10 items-center gap-2 rounded-md px-2">
          <button className="text-purple hover:text-purple-dark flex items-center justify-center">
            <BiMinus size="20" />
          </button>
          <p className="font-roboto text-base">10</p>
          <button className="text-purple hover:text-purple-dark flex items-center justify-center">
            <BiPlus size="20" />
          </button>
        </div>
        <button className="bg-purple-dark hover:bg-purple-dark/80 flex h-10 w-10 items-center justify-center rounded-md transition-colors">
          <CheckoutCar color="white" />
        </button>
      </footer>
    </div>
  )
}
