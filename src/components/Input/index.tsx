import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
  className?: string
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={twMerge(
        className,
        'bg-base-input h-11 rounded-md border-2 border-base-button p-3 text-sm outline-base-label',
      )}
    />
  )
}
