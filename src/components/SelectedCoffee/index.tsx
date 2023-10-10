import QntButton from '../QntButton'
import { PiTrash } from 'react-icons/pi'

export default function SelectedCoffee() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5 md:flex-nowrap md:gap-5">
        <img src="/coffeeImg/Arabe.png" alt="Coffee" className="h-16 w-16" />
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          <p className="w-full flex-grow text-center text-xl md:w-auto md:text-left">
            Expresso Tradicional
          </p>
          <QntButton />
          <button className="flex h-8 w-24 items-center justify-center gap-1 rounded-md bg-base-button hover:bg-base-button/70">
            <PiTrash className="h-4 w-4 text-purple" />
            <p className="text-xs">REMOVER</p>
          </button>
        </div>
        <div className="flex h-full flex-shrink-0 flex-grow justify-center md:justify-end">
          <p className="font-bold">R$ 1000,90</p>
        </div>
      </div>
      <hr className="h-[1px] bg-base-button" />
    </>
  )
}
