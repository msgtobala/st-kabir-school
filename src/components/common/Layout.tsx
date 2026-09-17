import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { EnquiryModalProvider } from '@/components/common/EnquiryModal'
import { FloatingEnquire } from '@/components/common/FloatingEnquire'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { Topbar } from '@/components/common/Topbar'
import { scrollToHash } from '@/lib/navigation'

function HashSectionScroller() {
  const { hash, pathname, key } = useLocation()

  useEffect(() => {
    history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    if (!hash) return

    let cancelled = false
    let tries = 0

    const attempt = () => {
      if (cancelled) return
      if (scrollToHash(hash)) return
      tries += 1
      if (tries < 80) window.setTimeout(attempt, 50)
    }

    attempt()
    return () => {
      cancelled = true
    }
  }, [hash, pathname, key])

  return null
}

export function Layout() {
  const { pathname } = useLocation()
  const isThankYou = pathname === '/thank-you'

  return (
    <EnquiryModalProvider>
      <div className="flex min-h-svh flex-col bg-canvas">
        <HashSectionScroller />
        <Topbar />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        {isThankYou ? null : <Footer />}
        <FloatingEnquire />
      </div>
    </EnquiryModalProvider>
  )
}
