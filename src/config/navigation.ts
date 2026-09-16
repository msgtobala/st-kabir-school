import type { FooterLink, NavItem, SocialLink } from '@/models/navigation'

export const homeSectionIds = {
  banner: 'home-banner',
  academicJourney: 'academic-journey',
  educators: 'educators',
  gallery: 'gallery',
} as const

export const navItems: NavItem[] = [
  {
    to: `/#${homeSectionIds.banner}`,
    label: 'The St. Kabir Way',
    end: true,
  },
  {
    to: `/#${homeSectionIds.academicJourney}`,
    label: 'Academic Journey',
    end: false,
  },
  {
    to: `/#${homeSectionIds.educators}`,
    label: 'Our Educators',
    end: false,
  },
  {
    to: `/#${homeSectionIds.gallery}`,
    label: 'Life at School',
    end: false,
  },
  //{ to: '/contact', label: 'Contact', end: false },
]

export const footerQuickLinks: FooterLink[] = [
  { to: '/', label: 'The St. Kabir Way' },
  { to: '/life-at-school', label: 'Campus & Facilities' },
]

export const footerContactLinks: FooterLink[] = [
  { to: '/admissions', label: 'Admissions & Facilities' },
  { to: '/contact', label: 'Contact Us' },
]

export const footerSocialLinks: SocialLink[] = [
  { href: 'https://www.instagram.com', label: 'Instagram' },
  { href: 'https://www.facebook.com', label: 'Facebook' },
  { href: 'https://www.youtube.com', label: 'YouTube' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn' },
]
