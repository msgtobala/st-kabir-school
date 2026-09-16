import { type DaySlot } from '@/models/home/day'

export const slots: DaySlot[] = [
  {
    time: '8:00 - 8:30 AM',
    title: 'Welcome & Morning Circle',
    description:
      'Start the day with greetings, prayers, songs, affirmations, and joyful conversations.',
    titleClass: 'text-teal',
  },
  {
    time: '8:30 – 8:40 AM',
    title: 'Circle Time',
    description:
      'Interact, share ideas, build confidence, and connect with friends.',
    titleClass: 'text-coral',
  },
  {
    time: '8:40 – 10:10 AM',
    title: 'Learning Time',
    description:
      'Explore letters, numbers, and new concepts through hands-on activities.',
    titleClass: 'text-accent-gold',
  },
  {
    time: '10:10 – 10:30 AM',
    title: 'Snack & Etiquette',
    description:
      'Enjoy healthy snacks while learning table manners and independence.',
    titleClass: 'text-accent-violet',
  },
  {
    time: '10:30 – 11:00 AM',
    title: 'Play & Explore',
    description:
      'Run, jump, solve puzzles, and build teamwork through indoor and outdoor play.',
    titleClass: 'text-accent-indigo',
  },
  {
    time: '11:00 – 11:30 AM',
    title: 'Creative Activities',
    description:
      'Art, craft, stories, dance, projects, and celebrations that spark imagination.',
    titleClass: 'text-accent-rose',
  },
]
