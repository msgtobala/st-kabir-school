import { Link } from 'react-router'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { cx } from '@/lib/cx'
import type { BrandLogoProps, BrandLogoSize } from '@/models/common/brand-logo'
import { logo } from '@/resources/images/brand'

const sizes = {
  header: 'h-12 w-auto sm:h-[3.25rem]',
  footer: 'h-14 w-auto sm:h-16',
} as const satisfies Record<BrandLogoSize, string>

export function BrandLogo({ size = 'header' }: BrandLogoProps) {
  return (
    <Link
      to="/"
      aria-label="St. Kabir School, Ahmedabad"
      className="flex shrink-0 items-center"
    >
      <OptimizedImage
        src={logo}
        alt=""
        className={cx('max-w-none', sizes[size])}
        priority
      />
    </Link>
  )
}
