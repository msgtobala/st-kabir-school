import type { ReactNode } from 'react'

export type Story = {
  id: string
  cardClass: string
  shadowClass: string
  star: string
  quote: ReactNode
  name: string
  role: string
}
