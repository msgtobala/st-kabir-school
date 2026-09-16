import { type Activity } from '@/models/home/beyond'
import { competitions, creativeArts, fieldTrips } from '@/resources/images/beyond'

export const activities: Activity[] = [
  {
    id: 'field-trips',
    tag: 'Field Trips',
    title: 'Learning beyond four walls',
    image: fieldTrips,
    imageCrop: {
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      objectFit: 'cover',
    },
    tagClass: 'bg-stage-foundation-chip',
  },
  {
    id: 'competitions',
    tag: 'Competitions',
    title: 'Healthy challenge & growth',
    image: competitions,
    imageCrop: {
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      objectFit: 'cover',
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
      height: '100%',
      top: '0',
      left: '0',
      objectFit: 'cover',
    },
    tagClass: 'bg-stage-middle',
  },
]
