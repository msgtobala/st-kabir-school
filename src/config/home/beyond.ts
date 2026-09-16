import { type Activity } from '@/models/home/beyond'
import { competitions, creativeArts, fieldTrips } from '@/resources/images/beyond'

export const activities: Activity[] = [
  {
    id: 'field-trips',
    tag: 'Field Trips',
    title: 'Learning beyond four walls',
    image: fieldTrips,
    imageCrop: {
      width: '134.38%',
      height: '100%',
      top: '0',
      left: '-14.46%',
    },
    tagClass: 'bg-stage-foundation-chip',
  },
  {
    id: 'competitions',
    tag: 'Competitions',
    title: 'Healthy challenge & growth',
    image: competitions,
    imageCrop: {
      width: '100.09%',
      height: '104.32%',
      top: '0',
      left: '-0.05%',
    },
    tagClass: 'bg-stage-preparatory',
  },
  {
    id: 'creative-arts',
    tag: 'Creative Arts',
    title: 'Expression and imagination',
    image: creativeArts,
    imageCrop: {
      width: '100%',
      height: '152.5%',
      top: '-29.42%',
      left: '0',
    },
    tagClass: 'bg-stage-middle',
  },
]
