import type { OptimizedSrc } from '@/models/image'

export type Educator = {
  id: string
  name: string
  tenure: string
  bio: string
  image: OptimizedSrc
  objectPosition: string
  borderClass: string
  photoClass: string
}
