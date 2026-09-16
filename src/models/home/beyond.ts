import type { ImageCrop, OptimizedSrc } from '@/models/image'

export type Activity = {
  id: string
  tag: string
  title: string
  image: OptimizedSrc
  imageCrop: ImageCrop
  tagClass: string
}
