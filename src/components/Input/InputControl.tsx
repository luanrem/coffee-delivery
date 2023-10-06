import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputControlProps = ComponentProps<'input'> & {
  className?: string
}

export default function InputControl({
  className,
  ...props
}: InputControlProps) {
  return (
    <input
      {...props}
      className={twMerge(
        className,
        'bg-base-input w-full rounded-md border-2 border-base-button p-3 text-sm outline-base-label',
      )}
    />
  )
}
