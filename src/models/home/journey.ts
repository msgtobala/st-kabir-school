import type { ImageCrop, OptimizedSrc } from '@/models/image'

export type Stage = {
  id: string
  age: string
  title: string
  description: string
  image: OptimizedSrc
  imageCrop: ImageCrop
  cardClass: string
  chipClass: string
  chips: string[]
}
