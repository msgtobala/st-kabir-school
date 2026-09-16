import astronautAvif from '@/assets/images/family/astronaut.avif'
import astronautLqip from '@/assets/images/family/astronaut.lqip.webp'
import astronautWebp from '@/assets/images/family/astronaut.webp'
import classroomAvif from '@/assets/images/family/classroom.avif'
import classroomLqip from '@/assets/images/family/classroom.lqip.webp'
import classroomWebp from '@/assets/images/family/classroom.webp'
import studentAvif from '@/assets/images/family/student.avif'
import studentLqip from '@/assets/images/family/student.lqip.webp'
import studentWebp from '@/assets/images/family/student.webp'
import type { OptimizedSrc } from '@/models/image'

export const classroom = {
  avif: classroomAvif,
  webp: classroomWebp,
  lqip: classroomLqip,
  width: 960,
  height: 1220,
} satisfies OptimizedSrc

export const astronaut = {
  avif: astronautAvif,
  webp: astronautWebp,
  lqip: astronautLqip,
  width: 960,
  height: 640,
} satisfies OptimizedSrc

export const student = {
  avif: studentAvif,
  webp: studentWebp,
  lqip: studentLqip,
  width: 960,
  height: 1094,
} satisfies OptimizedSrc
