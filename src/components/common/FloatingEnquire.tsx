import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Button } from '@/components/common/Button'
import { useEnquiryModal } from '@/hooks/useEnquiryModal'
import { homeSectionIds } from '@/config/navigation'

export function FloatingEnquire() {
  const { pathname } = useLocation()
  const enquiry = useEnquiryModal()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const banner = document.getElementById(homeSectionIds.banner)
    if (!banner) {
      setVisible(false)
      return
    }

    const update = () => {
      const { top, bottom } = banner.getBoundingClientRect()
      setVisible(top < 1 && bottom <= window.innerHeight + 1)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const resizeObserver = new ResizeObserver(update)
    resizeObserver.observe(banner)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      resizeObserver.disconnect()
      setVisible(false)
    }
  }, [pathname])

  return (
    <div
      className="pointer-events-none fixed right-4 bottom-4 z-40 transition-[opacity,transform] duration-300 sm:right-6 sm:bottom-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(0.75rem)',
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <Button
        variant="primary"
        className="pointer-events-auto px-6 py-3 shadow-card sm:px-8 sm:py-[14px]"
        onClick={enquiry.open}
        tabIndex={visible ? 0 : -1}
      >
        Enquire Now
      </Button>
    </div>
  )
}
