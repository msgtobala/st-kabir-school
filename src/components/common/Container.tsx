import { cx } from '@/lib/cx'
import type { ContainerProps } from '@/models/common/container'

export function Container({
  as: Comp = 'div',
  className,
  gutter = 'gutter',
  children,
}: ContainerProps) {
  return (
    <Comp
      className={cx(
        'mx-auto w-full max-w-page',
        gutter === 'page'
          ? 'px-5 sm:px-8 lg:px-page'
          : 'px-5 sm:px-8 lg:px-gutter',
        className,
      )}
    >
      {children}
    </Comp>
  )
}
