import { HomeHero } from '@/components/HomeHero'
import { LazySection } from '@/components/common/LazySection'
import { homeSectionIds } from '@/config/navigation'

const loadJourney = () =>
  import('@/components/HomeJourney').then((module) => ({
    default: module.HomeJourney,
  }))
const loadValues = () =>
  import('@/components/HomeValues').then((module) => ({
    default: module.HomeValues,
  }))
const loadDay = () =>
  import('@/components/HomeDay').then((module) => ({
    default: module.HomeDay,
  }))
const loadBeyond = () =>
  import('@/components/HomeBeyond').then((module) => ({
    default: module.HomeBeyond,
  }))
const loadStories = () =>
  import('@/components/HomeStories').then((module) => ({
    default: module.HomeStories,
  }))
const loadFamily = () =>
  import('@/components/HomeFamily').then((module) => ({
    default: module.HomeFamily,
  }))
const loadEducators = () =>
  import('@/components/HomeEducators').then((module) => ({
    default: module.HomeEducators,
  }))
const loadGallery = () =>
  import('@/components/HomeGallery').then((module) => ({
    default: module.HomeGallery,
  }))
const loadCallout = () =>
  import('@/components/HomeCallout').then((module) => ({
    default: module.HomeCallout,
  }))

export function HomePage() {
  return (
    <>
      <HomeHero />
      <LazySection
        id={homeSectionIds.academicJourney}
        loader={loadJourney}
        minHeight="40rem"
      />
      <LazySection loader={loadValues} minHeight="32rem" />
      <LazySection loader={loadDay} minHeight="52rem" />
      <LazySection loader={loadBeyond} minHeight="40rem" />
      <LazySection loader={loadStories} minHeight="36rem" />
      <LazySection loader={loadFamily} minHeight="48rem" />
      <LazySection
        id={homeSectionIds.educators}
        loader={loadEducators}
        minHeight="40rem"
      />
      <LazySection
        id={homeSectionIds.gallery}
        loader={loadGallery}
        minHeight="100rem"
      />
      <LazySection loader={loadCallout} minHeight="40rem" />
    </>
  )
}
