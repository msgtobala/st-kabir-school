import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Button } from '@/components/common/Button'
import { useEnquiryModal } from '@/hooks/useEnquiryModal'

export function FloatingEnquire() {
  const { pathname } = useLocation()
  const enquiry = useEnquiryModal()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const banner = document.getElementById('home-banner')
    if (!banner) {
      setVisible(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPast =
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 0
        setVisible(scrolledPast)
      },
      { threshold: 0 },
    )

    observer.observe(banner)
    return () => {
      observer.disconnect()
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
