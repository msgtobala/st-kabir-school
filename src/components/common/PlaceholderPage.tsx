import { Container } from '@/components/common/Container'
import { useMotion } from '@/hooks/useMotion'
import type { PlaceholderPageProps } from '@/models/common/placeholder'

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const motionRef = useMotion<HTMLElement>({ immediate: true })

  return (
    <Container className="py-8 sm:py-12">
      <section ref={motionRef} className="placeholder-page">
        <p data-reveal="heading" className="placeholder-kicker">
          St. Kabir School
        </p>
        <h1 data-reveal="heading" className="text-subtitle sm:text-section">
          {title}
        </h1>
        <p data-reveal="item">{description}</p>
      </section>
    </Container>
  )
}
