import { Button } from '@/components/common'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { homeSectionIds } from '@/config/navigation'
import { useEnquiryModal } from '@/hooks/useEnquiryModal'
import { useMotion } from '@/hooks/useMotion'
import { heroBanner } from '@/resources/images/hero'

export function HomeHero() {
  const motionRef = useMotion<HTMLElement>({ immediate: true })
  const enquiry = useEnquiryModal()

  return (
    <section
      ref={motionRef}
      id={homeSectionIds.banner}
      className="relative isolate overflow-hidden bg-cream wide:-mt-20 wide:aspect-[1440/1315]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-page flex-col items-center px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 wide:h-full wide:px-gutter wide:pt-[9.44vw] wide:pb-0">
        <p
          data-reveal="heading"
          className="text-base font-medium leading-6 text-coral uppercase sm:text-[20px]"
        >
          Study at
        </p>
        <h1
          data-reveal="heading"
          className="max-w-[716px] text-center font-medium text-[2rem] leading-none tracking-[-1.28px] text-navy-soft sm:text-[40px] lg:text-hero"
        >
          Ahmedabad&apos;s <span className="text-coral">Top School.</span>
          <br />
          From Day 1.
        </h1>
        <p
          data-reveal="heading"
          className="mt-4 max-w-[552px] text-center text-base leading-[1.4] text-slate sm:mt-5 sm:text-[20px]"
        >
          Give your child the advantage of belonging, learning and becoming -
          from day one.
        </p>
        <div
          data-reveal="item"
          className="mt-4 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-5 sm:w-auto sm:gap-5"
        >
          <Button variant="primary" onClick={enquiry.open}>
            Enquire Now
          </Button>
          <Button variant="secondary" onClick={enquiry.open}>
            Book a School Visit
          </Button>
        </div>
      </div>
      <div className="relative h-[min(78vw,26rem)] overflow-hidden sm:h-[min(68vw,32rem)] md:h-[min(58vw,38rem)] lg:h-[min(50vw,42rem)] wide:absolute wide:inset-0 wide:h-auto">
        <OptimizedImage
          src={heroBanner}
          alt="Students of St. Kabir School with colourful letters and learning props"
          className="absolute inset-0 size-full max-w-none object-cover object-[center_bottom] wide:object-[center_89%]"
          priority
        />
      </div>
    </section>
  )
}
