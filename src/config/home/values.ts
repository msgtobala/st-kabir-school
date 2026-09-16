import { type HomeValue } from '@/models/home/values'
import { graduationCap, lightbulb, star3 as star, users } from '@/resources/icons'

export const values: HomeValue[] = [
  {
    id: 'think',
    title: 'Think',
    description:
      'Building strong academic and cognitive foundations through curiosity and exploration.',
    icon: lightbulb,
    cardClass: 'bg-value-think',
  },
  {
    id: 'thrive',
    title: 'Thrive',
    description:
      'Nurturing physical, emotional and mental wellbeing for a confident tomorrow.',
    icon: graduationCap,
    cardClass: 'bg-value-thrive',
  },
  {
    id: 'become',
    title: 'Become',
    description:
      'Developing life skills, self-expression and a sense of responsibility.',
    icon: star,
    cardClass: 'bg-value-become',
  },
  {
    id: 'belong',
    title: 'Belong',
    description:
      'Instilling Indian values, kindness, respect and a strong sense of community.',
    icon: users,
    cardClass: 'bg-value-belong',
  },
]
