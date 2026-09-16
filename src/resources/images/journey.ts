import foundationAvif from '@/assets/images/journey/foundation.avif'
import foundationLqip from '@/assets/images/journey/foundation.lqip.webp'
import foundationWebp from '@/assets/images/journey/foundation.webp'
import middleAvif from '@/assets/images/journey/middle.avif'
import middleLqip from '@/assets/images/journey/middle.lqip.webp'
import middleWebp from '@/assets/images/journey/middle.webp'
import preparatoryAvif from '@/assets/images/journey/preparatory.avif'
import preparatoryLqip from '@/assets/images/journey/preparatory.lqip.webp'
import preparatoryWebp from '@/assets/images/journey/preparatory.webp'
import secondaryAvif from '@/assets/images/journey/secondary.avif'
import secondaryLqip from '@/assets/images/journey/secondary.lqip.webp'
import secondaryWebp from '@/assets/images/journey/secondary.webp'
import seniorAvif from '@/assets/images/journey/senior.avif'
import seniorLqip from '@/assets/images/journey/senior.lqip.webp'
import seniorWebp from '@/assets/images/journey/senior.webp'
import type { OptimizedSrc } from '@/models/image'

export const stageFoundation = {
  avif: foundationAvif,
  webp: foundationWebp,
  lqip: foundationLqip,
  width: 800,
  height: 533,
} satisfies OptimizedSrc

export const stagePreparatory = {
  avif: preparatoryAvif,
  webp: preparatoryWebp,
  lqip: preparatoryLqip,
  width: 800,
  height: 600,
} satisfies OptimizedSrc

export const stageMiddle = {
  avif: middleAvif,
  webp: middleWebp,
  lqip: middleLqip,
  width: 800,
  height: 534,
} satisfies OptimizedSrc

export const stageSecondary = {
  avif: secondaryAvif,
  webp: secondaryWebp,
  lqip: secondaryLqip,
  width: 800,
  height: 534,
} satisfies OptimizedSrc

export const stageSenior = {
  avif: seniorAvif,
  webp: seniorWebp,
  lqip: seniorLqip,
  width: 800,
  height: 533,
} satisfies OptimizedSrc
