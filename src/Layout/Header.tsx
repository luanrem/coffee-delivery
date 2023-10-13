import { Link, Outlet } from 'react-router-dom'
import CoffeeLogo from '@/components/icons/CoffeeLogo'
import CheckoutCar from '@/components/icons/CheckoutCar'
import { HiMiniMapPin } from 'react-icons/hi2'
import { useCartStore } from '@/hooks/card'

export default function Header() {
  const cartList = useCartStore((state) => state.cartList)
  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white px-5 md:px-32">
        <Link to={'/'}>
          <CoffeeLogo />
        </Link>
        <div className="flex gap-3">
          <button className="flex h-9 w-auto items-center gap-1 rounded-md bg-purple-light px-2 py-2 font-roboto transition-colors hover:bg-purple-light/70">
            <HiMiniMapPin className="text-2xl text-purple" />
            <p className=" text-purple-dark ">Porto Alegre, RS</p>
          </button>
          <Link
            to={cartList.length > 0 ? '/checkout' : ''}
            className="relative flex h-9 w-9 items-center justify-center rounded-md bg-yellow-light transition-colors hover:bg-yellow-light/70"
          >
            <CheckoutCar />
            <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark">
              <span className="font-roboto text-xs font-bold text-white">
                {cartList.length}
              </span>
            </div>
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  )
}
