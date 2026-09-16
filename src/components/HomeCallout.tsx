import { Button } from '@/components/common'
import { useEnquiryModal } from '@/hooks/useEnquiryModal'
import { useMotion } from '@/hooks/useMotion'
import { object1 as scribble } from '@/resources/icons'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { calloutBanner } from '@/resources/images/callout'
import { cx } from '@/lib/cx'

function CalloutCopy({ className }: { className?: string }) {
  const enquiry = useEnquiryModal()

  return (
    <div
      data-reveal="heading"
      className={cx('flex flex-col items-start gap-[18px]', className)}
    >
      <p className="rounded-full bg-stage-foundation-chip/19 px-3.5 py-1.5 text-eyebrow font-normal text-footer uppercase">
        Admissions Open 2027-28
      </p>
      <h2 className="font-medium text-[40px] leading-[0.95] text-teal lg:text-display-lg lg:leading-[0.95]">
        Ready for day one?
      </h2>
      <p className="text-[18px] font-light leading-normal text-footer/75">
        Pre-Primary Admissions 2027-28
      </p>
      <Button variant="tertiary" showIcon={false} onClick={enquiry.open}>
        Enquire now →
      </Button>
    </div>
  )
}

function CalloutArrow() {
  return (
    <div
      className="pointer-events-none absolute top-[181px] left-[calc(33.33%+27px)] flex h-[158.667px] w-[170.668px] items-center justify-center"
      aria-hidden="true"
    >
      <div className="h-[104.151px] w-[136.939px] -rotate-30 -scale-y-100">
        <span className="relative block h-[104.151px] w-[136.939px]">
          <img
            src={scribble}
            alt=""
            width={137}
            height={104}
            className="absolute inset-0 block size-full max-w-none"
          />
        </span>
      </div>
    </div>
  )
}

export function HomeCallout() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <section ref={motionRef} className="relative bg-canvas pb-[120px]">
      <div className="lg:hidden">
        <div className="relative h-[280px] overflow-hidden sm:h-[360px] md:h-[420px]">
          <OptimizedImage
            src={calloutBanner}
            alt="A young student holding a magnifying glass and a book"
            className="absolute inset-0 size-full max-w-none object-cover object-[8%_top]"
          />
        </div>
        <CalloutCopy className="px-5 py-10 sm:px-8" />
      </div>

      <div className="@container hidden w-full lg:block">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 'calc(100cqw * 606 / 1440)' }}
        >
          <div
            className="absolute top-0 left-0 h-[606px] w-[1440px] origin-top-left overflow-hidden"
            style={{ transform: 'scale(calc(100cqw / 1440px))' }}
          >
            <OptimizedImage
              src={calloutBanner}
              alt="A young student holding a magnifying glass and a book"
              className="absolute left-0 z-[-1] max-w-none"
              style={{
                height: '116.86%',
                top: '-16.84%',
                width: '155.07%',
                zIndex: -1,
              }}
            />
            <CalloutArrow />
            <CalloutCopy className="absolute top-[234px] left-[720px] w-[480px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
