import CheckoutCar from '../icons/CheckoutCar'
import { BiPlus, BiMinus } from 'react-icons/bi'

interface CoffeeCardProps {
  name: string
  description: string
  value: number
  tags: string[]
  pictureUrl: string
}

export default function CoffeeCard({
  name,
  description,
  value,
  tags,
  pictureUrl,
}: CoffeeCardProps) {
  return (
    <div className="mb-2 flex min-h-min w-64 flex-col items-center justify-between rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-base-card">
      <div className="relative -top-6 flex flex-col items-center justify-start gap-3 px-5">
        <img src={pictureUrl} alt={name} className="w-32" />
        <div className="flex flex-wrap justify-center gap-1">
          {tags.map((tag, index) => (
            <p
              key={String(index) + tag}
              className="text-2xs rounded-xl bg-yellow-light p-1 px-2 font-roboto font-bold text-yellow-dark"
            >
              {tag.toUpperCase()}
            </p>
          ))}
        </div>
        <h3 className="font-baloo text-xl font-bold">{name}</h3>
        <p className="text-center font-roboto text-sm text-base-label">
          {description}
        </p>
      </div>
      <footer className="flex w-full justify-between gap-2 px-5 pb-6">
        <div className="flex grow items-center justify-start gap-1">
          <p className="font-roboto text-sm text-base-subtitle">R$</p>
          <span className="font-baloo text-2xl font-extrabold text-base-subtitle">
            {value.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <div className="flex h-10 items-center gap-1 rounded-md bg-base-button px-2">
          <button className="flex items-center justify-center text-purple hover:text-purple-dark">
            <BiMinus size="20" />
          </button>
          <p className="font-roboto text-base">10</p>
          <button className="flex items-center justify-center text-purple hover:text-purple-dark">
            <BiPlus size="20" />
          </button>
        </div>
        <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-dark transition-colors hover:bg-purple-dark/80">
          <CheckoutCar color="white" />
        </button>
      </footer>
    </div>
  )
}
