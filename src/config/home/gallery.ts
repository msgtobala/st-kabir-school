import { type GalleryPhoto } from '@/models/home/gallery'
import {
  abcClassroom,
  classroomPortrait,
  computerLab,
  creativeArt,
  familyBlocks,
  fingerDabbing,
  grandparents,
  mathsLab,
  parentBonding,
  rakshaBandhan,
  reading,
  readingNook,
  scienceLab,
  sports,
  rathyatra,
  weeklyThemes,
} from '@/resources/images/gallery'

export const PAGE_COUNT = 3

export const rowOne: GalleryPhoto[] = [
  {
    id: 'family-blocks',
    src: familyBlocks,
    alt: 'A family playing with wooden blocks on the classroom floor',
    boxWidth: 586,
    crop: {
      width: '121.84%',
      height: '100%',
      top: '0',
      left: '-12.29%',
    },
  },
  {
    id: 'reading-nook',
    src: readingNook,
    alt: 'A child reading on a window seat with a stuffed rabbit',
    boxWidth: 714,
    object: 'cover',
  },
  {
    id: 'sports',
    src: sports,
    alt: 'Children playing on the school sports field',
    boxWidth: 586,
    crop: {
      width: '134.11%',
      height: '112.22%',
      top: '-4.17%',
      left: '-20.87%',
    },
  },
  {
    id: 'rathyatra',
    src: rathyatra,
    alt: 'Students during a Rathyatra weekly theme celebration',
    boxWidth: 586,
    crop: {
      width: '115.72%',
      height: '106.85%',
      top: '-3.46%',
      left: '-7.85%',
    },
  },
  {
    id: 'computer-lab',
    src: computerLab,
    alt: 'Students working in the middle school computer lab',
    boxWidth: 586,
    crop: {
      width: '144.33%',
      height: '100%',
      top: '0',
      left: '-34.15%',
    },
  },
]

export const rowTwo: GalleryPhoto[] = [
  {
    id: 'maths-lab',
    src: mathsLab,
    alt: 'Students measuring and comparing numbers at a maths lab table',
    boxWidth: 586,
    crop: {
      width: '116.95%',
      height: '107.98%',
      top: '0',
      left: '-1%',
    },
  },
  {
    id: 'parent-bonding',
    src: parentBonding,
    alt: 'A teacher and students working together on the classroom rug',
    boxWidth: 586,
    crop: {
      width: '100%',
      height: '156.4%',
      top: '-2.29%',
      left: '0',
    },
  },
  {
    id: 'finger-dabbing',
    src: fingerDabbing,
    alt: 'A student painting during a creative art activity',
    boxWidth: 586,
    crop: {
      width: '113.08%',
      height: '104.41%',
      top: '0',
      left: '-13.05%',
    },
  },
  {
    id: 'classroom-portrait',
    src: classroomPortrait,
    alt: 'Students in uniform during a classroom activity',
    boxWidth: 586,
    crop: {
      width: '100.02%',
      height: '173.74%',
      top: '-30.15%',
      left: '-0.01%',
    },
  },
  {
    id: 'creative-art',
    src: creativeArt,
    alt: 'A creative art activity in the classroom',
    boxWidth: 586,
    object: 'bottom',
  },
]

export const rowThree: GalleryPhoto[] = [
  {
    id: 'raksha-bandhan',
    src: rakshaBandhan,
    alt: 'Children in festive clothes during a Raksha Bandhan celebration',
    boxWidth: 586,
    crop: {
      width: '144.41%',
      height: '100%',
      top: '0',
      left: '-27.82%',
    },
  },
  {
    id: 'grandparents',
    src: grandparents,
    alt: 'Grandparents and children gathered outdoors on the school lawn',
    boxWidth: 586,
    crop: {
      width: '111.04%',
      height: '102.52%',
      top: '0',
      left: '-1.95%',
    },
  },
  {
    id: 'abc-classroom',
    src: abcClassroom,
    alt: 'A teacher working with a student at a classroom table',
    boxWidth: 586,
    object: 'bottom',
  },
  {
    id: 'weekly-themes',
    src: weeklyThemes,
    alt: 'Children tying a rakhi during a weekly theme celebration',
    boxWidth: 586,
    object: 'bottom',
  },
  {
    id: 'science-lab',
    src: scienceLab,
    alt: 'Students in the secondary school science lab',
    boxWidth: 586,
    crop: {
      width: '110.58%',
      height: '102.1%',
      top: '0',
      left: '-7.04%',
    },
  },
  {
    id: 'reading',
    src: reading,
    alt: 'A child reading a book',
    boxWidth: 586,
    crop: {
      width: '108.3%',
      height: '100%',
      top: '0',
      left: '-4.15%',
    },
  },
]
