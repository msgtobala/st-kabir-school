import { Container } from '@/components/common/Container'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { enquiryCopy } from '@/config/enquiry'
import { useMotion } from '@/hooks/useMotion'
import { thankYouBanner } from '@/resources/images/thank-you'

export function ThankYouPage() {
  const motionRef = useMotion<HTMLElement>({ immediate: true })

  return (
    <section
      ref={motionRef}
      className="relative isolate min-h-[calc(100svh-7.25rem)] overflow-hidden bg-cream sm:min-h-[calc(100svh-7.5rem)]"
    >
      <div className="absolute inset-0">
        <OptimizedImage
          src={thankYouBanner}
          alt="A St. Kabir student sitting beside stacked books labelled curiosity, creativity, kindness and confidence"
          className="absolute inset-0 size-full max-w-none object-cover object-[72%_center] lg:object-center"
          priority
        />
      </div>
      <Container className="relative z-10 flex min-h-[inherit] flex-col justify-start py-12 sm:py-16 lg:py-[80px]">
        <h1
          data-reveal="heading"
          className="max-w-[531px] font-medium text-[2rem] leading-none tracking-[-1.28px] text-navy-soft sm:text-[40px] lg:text-hero"
        >
          <span className="text-coral">{enquiryCopy.thankYouTitle[0]}</span>{' '}
          {enquiryCopy.thankYouTitle[1]}
        </h1>
        <div
          data-reveal="heading"
          className="mt-6 flex max-w-[506px] flex-col gap-5 text-base leading-[1.4] text-slate sm:mt-8 sm:text-[20px]"
        >
          {enquiryCopy.thankYouBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  )
}
