import { type FamilyTile } from '@/models/home/family'
import {
  brainCircuit,
  heart,
  home,
  smilePlus,
  star4 as star,
} from '@/resources/icons'

export const weekly: FamilyTile = {
  id: 'weekly',
  title: 'Weekly themes',
  icon: smilePlus,
  iconWidth: 75,
  iconHeight: 75,
  cardClass: 'bg-life-weekly',
  titleClass: 'text-life-weekly-text',
}

export const parent: FamilyTile = {
  id: 'parent',
  title: 'Individual Parent Interactions',
  icon: heart,
  iconWidth: 75,
  iconHeight: 75,
  cardClass: 'bg-life-creative',
  titleClass: 'text-life-creative-text',
}

export const bonding: FamilyTile = {
  id: 'bonding',
  title: 'Parent-Child Bonding Activities',
  icon: brainCircuit,
  iconWidth: 75,
  iconHeight: 75,
  cardClass: 'bg-life-bonding',
  titleClass: 'text-life-bonding-text',
}

export const grandparents: FamilyTile = {
  id: 'grandparents',
  title: 'Grandparents Day and Family Engagement',
  icon: star,
  iconWidth: 75,
  iconHeight: 80,
  cardClass: 'bg-life-family',
  titleClass: 'text-life-family-text',
}

export const openHouse: FamilyTile = {
  id: 'open-house',
  title: 'Open-house assessments',
  icon: home,
  iconWidth: 75,
  iconHeight: 75,
  cardClass: 'bg-life-openhouse',
  titleClass: 'text-life-openhouse-text',
}
