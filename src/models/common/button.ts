import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

type ButtonBaseProps = {
  variant?: ButtonVariant
  showIcon?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentProps<'button'>, keyof ButtonBaseProps> & {
    to?: undefined
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, keyof ButtonBaseProps> & {
    to: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink
