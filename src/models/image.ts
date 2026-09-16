export type ImageCrop = {
  width: string
  height: string
  top: string
  left: string
  objectFit?: 'cover' | 'contain'
  objectPosition?: string
}

export type OptimizedSrc = {
  avif: string
  webp: string
  lqip?: string
  width: number
  height: number
}
