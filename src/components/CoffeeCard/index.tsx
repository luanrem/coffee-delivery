import Picture from '../../assets/coffeeImg/ExpressoTradicional.png'
import CheckoutCar from '../icons/CheckoutCar'

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
      <footer className="flex w-full justify-between px-5 pb-6">
        <div className="flex items-center justify-start gap-1">
          <p className="text-base-subtitle">R$</p>
          <span className="text-base-subtitle font-baloo text-2xl font-extrabold">
            9,90
          </span>
        </div>
        <div className="flex">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button>
          <CheckoutCar />
        </button>
      </footer>
    </div>
  )
}
