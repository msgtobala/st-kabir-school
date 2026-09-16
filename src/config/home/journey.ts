import { type Stage } from '@/models/home/journey'
import {
  stageFoundation,
  stageMiddle,
  stagePreparatory,
  stageSecondary,
  stageSenior,
} from '@/resources/images/journey'

export const stages: Stage[] = [
  {
    id: 'foundation',
    age: 'Age 3–7 years',
    title: 'Foundational Stage',
    description:
      'Play-based learning that builds curiosity, social skills, and strong early foundations.',
    image: stageFoundation,
    imageCrop: {
      width: '100.26%',
      height: '106.72%',
      top: '-6.66%',
      left: '-0.13%',
    },
    cardClass: 'bg-stage-foundation',
    chipClass: 'bg-stage-foundation-chip',
    chips: [
      'Colours & Shapes',
      'Early Language Skills',
      'Motor Skill Development',
      'Songs & Rhymes',
    ],
  },
  {
    id: 'preparatory',
    age: 'Age 8–10 years',
    title: 'Preparatory Stage',
    description:
      'Building literacy, numeracy, scientific thinking, and creative exploration through active learning.',
    image: stagePreparatory,
    imageCrop: {
      width: '108.3%',
      height: '129.83%',
      top: '-5.04%',
      left: '-4.15%',
    },
    cardClass: 'bg-stage-preparatory',
    chipClass: 'bg-stage-preparatory-chip',
    chips: [
      'Literacy & Communication',
      'Numeracy & Mathematics',
      'Science & Environment',
      'Social-Emotional Growth',
    ],
  },
  {
    id: 'middle',
    age: 'Age 11–14 years',
    title: 'Middle School',
    description:
      'Expanding perspectives through inquiry, creativity, collaboration, and problem-solving.',
    image: stageMiddle,
    imageCrop: { width: '100%', height: '106.44%', top: '-0.07%', left: '0' },
    cardClass: 'bg-stage-middle',
    chipClass: 'bg-stage-middle-chip',
    chips: [
      'Language & Writing',
      'Mathematical Thinking',
      'Scientific Enquiry',
      'Digital Literacy',
      'Problem Solving',
      'Social Studies',
    ],
  },
  {
    id: 'secondary',
    age: 'Age 15–18 years',
    title: 'Secondary School',
    description:
      'Developing critical thinking, leadership, academic excellence, and future-ready skills.',
    image: stageSecondary,
    imageCrop: { width: '100%', height: '149.09%', top: '-24.6%', left: '0' },
    cardClass: 'bg-stage-secondary',
    chipClass: 'bg-stage-secondary-chip',
    chips: [
      'Academic Excellence',
      'Board Exam Prep',
      'Career Awareness',
      'STEM Learning',
      'Entrance Exam Prep',
      'Leadership Skills',
    ],
  },
  {
    id: 'senior',
    age: 'Age 16–18 years',
    title: 'Senior Secondary',
    description:
      'Specialized pathways that prepare students for higher education and successful careers.',
    image: stageSenior,
    imageCrop: { width: '100%', height: '106.44%', top: '-0.07%', left: '0' },
    cardClass: 'bg-stage-senior',
    chipClass: 'bg-stage-senior-chip',
    chips: [
      'Science Stream',
      'Commerce Stream',
      'Humanities',
      'Financial Literacy',
      'Entrepreneurship',
      'University Readiness',
    ],
  },
]
