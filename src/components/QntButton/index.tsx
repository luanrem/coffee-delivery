import { Item, useCartStore } from '@/hooks/card'
import { BiMinus, BiPlus } from 'react-icons/bi'

interface QntButton {
  item: Item
}

export default function QntButton({ item }: QntButton) {
  const [updateQuantity] = useCartStore((state) => [state.updateQuantity])

  return (
    <div className="flex h-8 max-w-[4.5rem] items-center justify-center gap-1 rounded-md bg-base-button px-2">
      <button
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        className="flex items-center justify-center text-purple hover:text-purple-dark"
      >
        <BiMinus size="20" />
      </button>
      <p className="text-base">{item.quantity}</p>
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className="flex items-center justify-center text-purple hover:text-purple-dark"
      >
        <BiPlus size="20" />
      </button>
    </div>
  )
}
