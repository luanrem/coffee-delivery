import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type InputSulfixProps = ComponentProps<'p'> & {
  className?: string
  children: ReactNode
}

export default function InputSulfix({
  className,
  children,
  ...props
}: InputSulfixProps) {
  return (
    <p
      {...props}
      className={twMerge(
        className,
        'absolute right-3 text-xs italic text-base-label',
      )}
    >
      {children}
    </p>
  )
}
