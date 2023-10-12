import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Item, useCartStore } from '@/hooks/card'
import { BRFormatter } from '@/utils/formatter'
import QntButton from '../QntButton'
import { PiTrash } from 'react-icons/pi'

type SelectedCoffeeType = ComponentProps<'div'> & {
  item: Item
}

export default function SelectedCoffee({
  className,
  item,
  ...props
}: SelectedCoffeeType) {
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  return (
    <>
      <div
        {...props}
        className={twMerge(
          className,
          'flex flex-wrap items-center justify-center gap-5 md:flex-nowrap md:gap-5',
        )}
      >
        <img src={item.pictureUrl} alt="Coffee" className="h-16 w-16" />
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          <p className="w-full flex-grow text-center text-xl md:w-auto md:text-left">
            {item.name}
          </p>
          <QntButton item={item} />
          <button
            onClick={() => removeFromCart(item.id)}
            className="flex h-8 w-24 items-center justify-center gap-1 rounded-md bg-base-button hover:bg-base-button/70"
          >
            <PiTrash className="h-4 w-4 text-purple" />
            <p className="text-xs">REMOVER</p>
          </button>
        </div>
        <div className="flex h-full flex-shrink-0 flex-grow justify-center md:justify-end">
          <p className="font-bold">{BRFormatter.format(item.price)}</p>
        </div>
      </div>
      <hr className="h-[1px] bg-base-button" />
    </>
  )
}
