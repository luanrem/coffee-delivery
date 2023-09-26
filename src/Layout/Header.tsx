import { Outlet } from 'react-router-dom'
import CoffeeLogo from '../components/CoffeeLogo'
import { HiMiniMapPin } from 'react-icons/hi2'

export default function Header() {
  return (
    <>
      <header className="flex h-24 items-center justify-between px-40">
        <CoffeeLogo />
        <div className="flex">
          <button className="bg-purple-light flex h-9 w-auto items-center gap-1 rounded-md px-2 py-2">
            <HiMiniMapPin className="text-purple text-2xl" />
            <p className="text-purple-dark">Porto Alegre, RS</p>
          </button>
          <button>Carrinho</button>
        </div>
      </header>
      <Outlet />
    </>
  )
}
