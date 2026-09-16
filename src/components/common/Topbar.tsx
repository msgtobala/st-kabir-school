import { Container } from '@/components/common/Container'
import { useEnquiryModal } from '@/hooks/useEnquiryModal'
import { useMotion } from '@/hooks/useMotion'

export function Topbar() {
  const motionRef = useMotion<HTMLDivElement>({ immediate: true })
  const enquiry = useEnquiryModal()

  return (
    <div
      ref={motionRef}
      className="bg-announcement text-[12px] leading-normal text-white sm:text-[13px]"
    >
      <Container
        gutter="page"
        className="flex h-8 items-center justify-between gap-3 sm:h-9 sm:gap-4"
      >
        <p data-reveal="heading" className="min-w-0 truncate font-medium">
          ♥ Pre-Primary admissions 2027-28 now open
        </p>
        <button
          type="button"
          data-hover="press"
          onClick={enquiry.open}
          className="inline-flex shrink-0 cursor-pointer items-center font-semibold uppercase whitespace-nowrap will-change-transform hover:opacity-80"
        >
          Enquire now
          <span className="ml-1 hidden min-[360px]:inline" aria-hidden="true">
            →
          </span>
        </button>
      </Container>
    </div>
  )
}
