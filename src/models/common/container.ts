import type { ElementType, ReactNode } from 'react'

export type ContainerGutter = 'gutter' | 'page'

export type ContainerProps = {
  as?: ElementType
  className?: string
  gutter?: ContainerGutter
  children: ReactNode
}
