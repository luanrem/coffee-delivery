import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type IconProps = ComponentProps<'div'> & {
  icon: ElementType
}

export default function Icon({ className, icon: Icon, ...props }: IconProps) {
  return (
    <div
      {...props}
      className={twMerge(
        className,
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
      )}
    >
      <Icon className="text-base-background" />
    </div>
  )
}
