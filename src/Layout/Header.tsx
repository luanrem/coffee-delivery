import { Outlet } from 'react-router-dom'
import CoffeeLogo from '../components/icons/CoffeeLogo'
import { HiMiniMapPin } from 'react-icons/hi2'
import CheckoutCar from '@/components/icons/CheckoutCar'

export default function Header() {
  return (
    <>
      <header className="flex h-24 items-center justify-between px-32">
        <CoffeeLogo />
        <div className="flex gap-3">
          <button className="bg-purple-light flex h-9 w-auto items-center gap-1 rounded-md px-2 py-2 font-roboto">
            <HiMiniMapPin className="text-purple text-2xl" />
            <p className="text-purple-dark">Porto Alegre, RS</p>
          </button>
          <button className="bg-yellow-light relative flex h-9 w-9 items-center justify-center rounded-md">
            <CheckoutCar />
            <div className="bg-yellow-dark absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full">
              <span className="font-roboto text-xs font-bold text-white">
                3
              </span>
            </div>
          </button>
        </div>
      </header>
      <Outlet />
    </>
  )
}
