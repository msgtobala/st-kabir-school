import { Link } from 'react-router'
import { BrandLogo } from '@/components/common/BrandLogo'
import { Container } from '@/components/common/Container'
import {
  footerContactLinks as contactLinks,
  footerQuickLinks as quickLinks,
  footerSocialLinks as socialLinks,
} from '@/config/navigation'
import { useMotion } from '@/hooks/useMotion'
import { stayOnPageIfUnready } from '@/lib/navigation'
import { divider } from '@/resources/icons'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { studentArt } from '@/resources/images/footer'

export function Footer() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <footer ref={motionRef} className="relative overflow-hidden bg-canvas">
      <Container className="relative pt-8 pb-6 md:pt-10 lg:min-h-[555px] lg:pt-12">
        <div
          data-reveal="heading"
          className="relative z-10 max-w-[360px] bg-canvas pt-0"
        >
          <BrandLogo size="footer" />
          <p className="mt-4 max-w-[317px] font-normal text-[2rem] leading-[0.95] text-coral sm:mt-[19px] sm:text-display lg:text-display-lg">
            Learn. Excel and Achieve
          </p>
          <div className="mt-8 flex gap-10 sm:mt-10 sm:gap-12 lg:mt-[172px] lg:gap-[80px]">
            <div>
              <p className="text-caption leading-[2] text-gray uppercase">
                Quick Links
              </p>
              <ul className="mt-1 text-sm text-ink">
                {quickLinks.map((item) => (
                  <li key={item.to} className="leading-[3]">
                    <Link
                      to={item.to}
                      data-hover="press"
                      onClick={(event) => stayOnPageIfUnready(event, item.to)}
                      className="inline-block will-change-transform hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-caption leading-[2] text-gray uppercase">
                Contact
              </p>
              <ul className="mt-1 text-sm text-ink">
                {contactLinks.map((item) => (
                  <li key={item.to} className="leading-[3]">
                    <Link
                      to={item.to}
                      data-hover="press"
                      onClick={(event) => stayOnPageIfUnready(event, item.to)}
                      className="inline-block will-change-transform hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute top-[17px] right-0 hidden h-[280px] w-[420px] md:block lg:h-[490px] lg:w-[735px]">
          <OptimizedImage
            src={studentArt}
            alt=""
            className="absolute inset-0 size-full max-w-none object-cover object-center"
          />
        </div>

        <div data-reveal="item" className="relative z-10 mt-8">
          <div className="h-px w-full">
            <img
              src={divider}
              alt=""
              width={1296}
              height={1}
              className="block size-full max-w-none"
            />
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="text-caption leading-[2] text-gray capitalize">
              @ copyright
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-caption leading-[2] text-gray uppercase">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block will-change-transform hover:text-ink"
                    data-hover="press"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
