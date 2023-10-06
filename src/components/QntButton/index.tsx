import { BiMinus, BiPlus } from 'react-icons/bi'

export default function QntButton() {
  return (
    <div className="flex h-8 max-w-[4.5rem] items-center justify-center gap-1 rounded-md bg-base-button px-2">
      <button className="flex items-center justify-center text-purple hover:text-purple-dark">
        <BiMinus size="20" />
      </button>
      <p className="text-base">8</p>
      <button className="flex items-center justify-center text-purple hover:text-purple-dark">
        <BiPlus size="20" />
      </button>
    </div>
  )
}
