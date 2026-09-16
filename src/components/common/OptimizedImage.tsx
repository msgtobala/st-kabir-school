import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { cx } from '@/lib/cx'
import type { OptimizedSrc } from '@/models/image'

type OptimizedImageProps = {
  src: OptimizedSrc
  alt: string
  className?: string
  style?: CSSProperties
  width?: number
  height?: number
  priority?: boolean
  loading?: 'lazy' | 'eager'
}

export function OptimizedImage({
  src,
  alt,
  className,
  style,
  width,
  height,
  priority = false,
  loading,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const eager = priority || loading === 'eager'
  const w = width ?? src.width
  const h = height ?? src.height

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src.webp])

  return (
    <>
      {src.lqip ? (
        <img
          src={src.lqip}
          alt=""
          aria-hidden="true"
          width={w}
          height={h}
          className={cx(
            className,
            'pointer-events-none transition-opacity duration-300',
            loaded && 'opacity-0',
          )}
          style={style}
        />
      ) : null}
      <picture className="contents">
        <source srcSet={src.avif} type="image/avif" />
        <source srcSet={src.webp} type="image/webp" />
        <img
          ref={imgRef}
          data-image-full=""
          src={src.webp}
          alt={alt}
          width={w}
          height={h}
          className={cx(className, 'relative z-[1]')}
          style={style}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </>
  )
}
