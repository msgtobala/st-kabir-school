import abcClassroomAvif from '@/assets/images/gallery/abc-classroom.avif'
import abcClassroomLqip from '@/assets/images/gallery/abc-classroom.lqip.webp'
import abcClassroomWebp from '@/assets/images/gallery/abc-classroom.webp'
import classroomPortraitAvif from '@/assets/images/gallery/classroom-portrait.avif'
import classroomPortraitLqip from '@/assets/images/gallery/classroom-portrait.lqip.webp'
import classroomPortraitWebp from '@/assets/images/gallery/classroom-portrait.webp'
import computerLabAvif from '@/assets/images/gallery/computer-lab.avif'
import computerLabLqip from '@/assets/images/gallery/computer-lab.lqip.webp'
import computerLabWebp from '@/assets/images/gallery/computer-lab.webp'
import creativeArtAvif from '@/assets/images/gallery/creative-art.avif'
import creativeArtLqip from '@/assets/images/gallery/creative-art.lqip.webp'
import creativeArtWebp from '@/assets/images/gallery/creative-art.webp'
import familyBlocksAvif from '@/assets/images/gallery/family-blocks.avif'
import familyBlocksLqip from '@/assets/images/gallery/family-blocks.lqip.webp'
import familyBlocksWebp from '@/assets/images/gallery/family-blocks.webp'
import fingerDabbingAvif from '@/assets/images/gallery/finger-dabbing.avif'
import fingerDabbingLqip from '@/assets/images/gallery/finger-dabbing.lqip.webp'
import fingerDabbingWebp from '@/assets/images/gallery/finger-dabbing.webp'
import grandparentsAvif from '@/assets/images/gallery/grandparents.avif'
import grandparentsLqip from '@/assets/images/gallery/grandparents.lqip.webp'
import grandparentsWebp from '@/assets/images/gallery/grandparents.webp'
import mathsLabAvif from '@/assets/images/gallery/maths-lab.avif'
import mathsLabLqip from '@/assets/images/gallery/maths-lab.lqip.webp'
import mathsLabWebp from '@/assets/images/gallery/maths-lab.webp'
import parentBondingAvif from '@/assets/images/gallery/parent-bonding.avif'
import parentBondingLqip from '@/assets/images/gallery/parent-bonding.lqip.webp'
import parentBondingWebp from '@/assets/images/gallery/parent-bonding.webp'
import rakshaBandhanAvif from '@/assets/images/gallery/raksha-bandhan.avif'
import rakshaBandhanLqip from '@/assets/images/gallery/raksha-bandhan.lqip.webp'
import rakshaBandhanWebp from '@/assets/images/gallery/raksha-bandhan.webp'
import rathyatraAvif from '@/assets/images/gallery/rathyatra.avif'
import rathyatraLqip from '@/assets/images/gallery/rathyatra.lqip.webp'
import rathyatraWebp from '@/assets/images/gallery/rathyatra.webp'
import readingAvif from '@/assets/images/gallery/reading.avif'
import readingLqip from '@/assets/images/gallery/reading.lqip.webp'
import readingWebp from '@/assets/images/gallery/reading.webp'
import readingNookAvif from '@/assets/images/gallery/reading-nook.avif'
import readingNookLqip from '@/assets/images/gallery/reading-nook.lqip.webp'
import readingNookWebp from '@/assets/images/gallery/reading-nook.webp'
import scienceLabAvif from '@/assets/images/gallery/science-lab.avif'
import scienceLabLqip from '@/assets/images/gallery/science-lab.lqip.webp'
import scienceLabWebp from '@/assets/images/gallery/science-lab.webp'
import sportsAvif from '@/assets/images/gallery/sports.avif'
import sportsLqip from '@/assets/images/gallery/sports.lqip.webp'
import sportsWebp from '@/assets/images/gallery/sports.webp'
import weeklyThemesAvif from '@/assets/images/gallery/weekly-themes.avif'
import weeklyThemesLqip from '@/assets/images/gallery/weekly-themes.lqip.webp'
import weeklyThemesWebp from '@/assets/images/gallery/weekly-themes.webp'
import type { OptimizedSrc } from '@/models/image'

function photo(
  avif: string,
  webp: string,
  lqip: string,
  width: number,
  height: number,
): OptimizedSrc {
  return { avif, webp, lqip, width, height }
}

export const familyBlocks = photo(
  familyBlocksAvif,
  familyBlocksWebp,
  familyBlocksLqip,
  1400,
  933,
)
export const readingNook = photo(
  readingNookAvif,
  readingNookWebp,
  readingNookLqip,
  1400,
  933,
)
export const sports = photo(sportsAvif, sportsWebp, sportsLqip, 1280, 870)
export const rathyatra = photo(
  rathyatraAvif,
  rathyatraWebp,
  rathyatraLqip,
  1400,
  1050,
)
export const computerLab = photo(
  computerLabAvif,
  computerLabWebp,
  computerLabLqip,
  1400,
  788,
)
export const mathsLab = photo(mathsLabAvif, mathsLabWebp, mathsLabLqip, 1400, 1050)
export const parentBonding = photo(
  parentBondingAvif,
  parentBondingWebp,
  parentBondingLqip,
  1113,
  1414,
)
export const fingerDabbing = photo(
  fingerDabbingAvif,
  fingerDabbingWebp,
  fingerDabbingLqip,
  1280,
  960,
)
export const classroomPortrait = photo(
  classroomPortraitAvif,
  classroomPortraitWebp,
  classroomPortraitLqip,
  1056,
  1490,
)
export const creativeArt = photo(
  creativeArtAvif,
  creativeArtWebp,
  creativeArtLqip,
  1024,
  773,
)
export const rakshaBandhan = photo(
  rakshaBandhanAvif,
  rakshaBandhanWebp,
  rakshaBandhanLqip,
  1400,
  788,
)
export const grandparents = photo(
  grandparentsAvif,
  grandparentsWebp,
  grandparentsLqip,
  1400,
  1050,
)
export const abcClassroom = photo(
  abcClassroomAvif,
  abcClassroomWebp,
  abcClassroomLqip,
  1172,
  952,
)
export const weeklyThemes = photo(
  weeklyThemesAvif,
  weeklyThemesWebp,
  weeklyThemesLqip,
  1172,
  952,
)
export const scienceLab = photo(
  scienceLabAvif,
  scienceLabWebp,
  scienceLabLqip,
  1400,
  1050,
)
export const reading = photo(readingAvif, readingWebp, readingLqip, 1400, 1050)
