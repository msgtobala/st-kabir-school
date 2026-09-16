import competitionsAvif from '@/assets/images/beyond/competitions.avif'
import competitionsLqip from '@/assets/images/beyond/competitions.lqip.webp'
import competitionsWebp from '@/assets/images/beyond/competitions.webp'
import creativeArtsAvif from '@/assets/images/beyond/creative-arts.avif'
import creativeArtsLqip from '@/assets/images/beyond/creative-arts.lqip.webp'
import creativeArtsWebp from '@/assets/images/beyond/creative-arts.webp'
import fieldTripsAvif from '@/assets/images/beyond/field-trips.avif'
import fieldTripsLqip from '@/assets/images/beyond/field-trips.lqip.webp'
import fieldTripsWebp from '@/assets/images/beyond/field-trips.webp'
import type { OptimizedSrc } from '@/models/image'

export const fieldTrips = {
  avif: fieldTripsAvif,
  webp: fieldTripsWebp,
  lqip: fieldTripsLqip,
  width: 960,
  height: 861,
} satisfies OptimizedSrc

export const competitions = {
  avif: competitionsAvif,
  webp: competitionsWebp,
  lqip: competitionsLqip,
  width: 960,
  height: 860,
} satisfies OptimizedSrc

export const creativeArts = {
  avif: creativeArtsAvif,
  webp: creativeArtsWebp,
  lqip: creativeArtsLqip,
  width: 960,
  height: 861,
} satisfies OptimizedSrc
