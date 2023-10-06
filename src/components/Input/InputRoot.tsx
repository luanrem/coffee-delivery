import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type InputRootProps = ComponentProps<'div'> & {
  className?: string
  children: ReactNode
}

export default function InputRoot({
  className,
  children,
  ...props
}: InputRootProps) {
  return (
    <div
      {...props}
      className={twMerge(className, 'relative flex h-11 items-center')}
    >
      {children}
    </div>
  )
}
