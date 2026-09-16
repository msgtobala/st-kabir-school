import { useEffect, useId, useState, type MouseEvent } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { BrandLogo } from '@/components/common/BrandLogo'
import { Container } from '@/components/common/Container'
import { navItems } from '@/config/navigation'
import { useEnquiryModal } from '@/hooks/useEnquiryModal'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'
import { gsap, useGSAP } from '@/lib/gsap'
import { hashFromTo, isNavItemActive, scrollToHash, stayOnPageIfUnready } from '@/lib/navigation'

export function Header() {
  const motionRef = useMotion<HTMLElement>()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const menuId = useId()
  const enquiry = useEnquiryModal()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useGSAP(
    () => {
      if (!menuOpen) return

      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          `#${CSS.escape(menuId)} a`,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.28,
            stagger: 0.04,
            ease: 'power2.out',
          },
        )
      })
      return () => mm.revert()
    },
    { dependencies: [menuOpen, menuId], scope: motionRef },
  )

  const onNavClick = (event: MouseEvent, to: string) => {
    stayOnPageIfUnready(event, to)
    if (event.defaultPrevented) return
    const hash = hashFromTo(to)
    if (!hash) return
    event.preventDefault()
    if (location.pathname !== '/' || location.hash !== hash) {
      navigate(to, { preventScrollReset: true })
      return
    }
    scrollToHash(hash)
  }

  return (
    <header ref={motionRef} className="sticky top-0 z-50 border-b border-border bg-cream">
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 sm:h-20 sm:gap-4">
        <BrandLogo size="header" />
        <nav
          aria-label="Main"
          className="hidden items-center justify-center gap-6 lg:flex xl:gap-[33px]"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              preventScrollReset
              aria-current={
                isNavItemActive(item, location.pathname, location.hash, false)
                  ? 'page'
                  : undefined
              }
              onClick={(event) => onNavClick(event, item.to)}
              className={({ isActive }) =>
                cx(
                  'p-1 text-sm whitespace-nowrap will-change-transform',
                  isNavItemActive(item, location.pathname, location.hash, isActive)
                    ? 'font-medium text-brand'
                    : 'font-normal text-ink hover:text-brand',
                )
              }
              data-hover="press"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            onClick={enquiry.open}
            className="hidden cursor-pointer items-center justify-center rounded-xl bg-brand px-3 py-2 text-[11px] font-semibold text-white uppercase whitespace-nowrap will-change-transform hover:brightness-95 min-[480px]:inline-flex sm:px-4 sm:text-[12px]"
            data-hover="press"
          >
            Book a visit
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-navy will-change-transform lg:hidden"
            data-hover="press"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative size-6" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cx(
                  'absolute inset-0 size-6 transition-[opacity,transform] duration-200',
                  menuOpen ? 'scale-75 rotate-90 opacity-0' : 'opacity-100',
                )}
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cx(
                  'absolute inset-0 size-6 transition-[opacity,transform] duration-200',
                  menuOpen ? 'opacity-100' : 'scale-75 -rotate-90 opacity-0',
                )}
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </span>
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <button
          type="button"
          tabIndex={-1}
          className="fixed inset-0 z-10 bg-navy/25 lg:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <nav
        id={menuId}
        aria-label="Mobile"
        className={cx(
          'absolute inset-x-0 top-full z-30 border-b border-border bg-cream lg:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <div className="mx-auto flex max-w-page flex-col px-5 py-3 sm:px-8">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              enquiry.open()
            }}
            className="mb-1 inline-flex w-fit cursor-pointer items-center justify-center rounded-xl bg-brand px-4 py-2 text-[12px] font-semibold text-white uppercase will-change-transform min-[480px]:hidden"
            data-hover="press"
          >
            Book a visit
          </button>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              preventScrollReset
              aria-current={
                isNavItemActive(item, location.pathname, location.hash, false)
                  ? 'page'
                  : undefined
              }
              onClick={(event) => {
                onNavClick(event, item.to)
                setMenuOpen(false)
              }}
              className={({ isActive }) =>
                cx(
                  'border-b border-border/70 px-1 py-3 text-sm last:border-b-0',
                  isNavItemActive(item, location.pathname, location.hash, isActive)
                    ? 'font-medium text-brand'
                    : 'font-normal text-ink hover:text-brand',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
