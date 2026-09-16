import type { ImageCrop, OptimizedSrc } from '@/models/image'

export type GalleryPhoto = {
  id: string
  src: OptimizedSrc
  alt: string
  boxWidth: number
  crop?: ImageCrop
  object?: 'cover' | 'bottom'
}
