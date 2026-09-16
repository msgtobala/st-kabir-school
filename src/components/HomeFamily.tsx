import { Container } from '@/components/common'
import {
  bonding,
  grandparents,
  openHouse,
  parent,
  weekly,
} from '@/config/home/family'
import { useMotion } from '@/hooks/useMotion'
import { cx } from '@/lib/cx'
import type { FamilyTile } from '@/models/home/family'
import { object as scribble } from '@/resources/icons'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { astronaut, classroom, student } from '@/resources/images/family'

function FeatureTile({
  tile,
  className,
}: {
  tile: FamilyTile
  className?: string
}) {
  return (
    <div
      data-reveal="item"
      data-hover="lift"
      className={cx(
        'flex min-h-[220px] flex-col justify-between rounded-lg p-6 will-change-transform lg:h-[292px] lg:min-h-0',
        tile.cardClass,
        className,
      )}
    >
      <span
        className="relative shrink-0"
        style={{ width: tile.iconWidth, height: tile.iconHeight }}
        aria-hidden="true"
      >
        <img
          src={tile.icon}
          alt=""
          width={tile.iconWidth}
          height={tile.iconHeight}
          className="absolute inset-0 block size-full max-w-none"
        />
      </span>
      <h3 className={cx('max-w-[303px] font-normal text-subtitle', tile.titleClass)}>
        {tile.title}
      </h3>
    </div>
  )
}

function StudentPortrait({ className }: { className?: string }) {
  return (
    <div className={cx('h-[336px] w-[326px]', className)}>
      <div className="h-full w-full -scale-y-100 rotate-180">
        <div className="relative h-[336px] w-[326px] overflow-hidden">
          <OptimizedImage
            src={student}
            alt=""
            className="absolute left-0 max-w-none"
            style={{ height: '110.61%', top: '-6.16%', width: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

export function HomeFamily() {
  const motionRef = useMotion<HTMLElement>()

  return (
    <section
      ref={motionRef}
      className="bg-canvas py-16 sm:py-20 lg:py-[100px]"
    >
      <Container className="relative">
        <div
          data-reveal="heading"
          className="mx-auto flex max-w-[608px] flex-col items-center gap-2.5 text-center"
        >
          <p className="font-medium text-[20px] leading-normal text-coral uppercase">
            School & Family
          </p>
          <h2 className="font-medium text-[32px] leading-[1.1] text-navy lg:text-display">
            School and home.
            <br />
            On the same team.
          </h2>
        </div>

        <p
          className="mx-auto mt-4 -rotate-[8deg] text-center text-[20px] leading-normal tracking-[-0.96px] text-accent-mint lg:hidden"
          style={{
            fontFamily: '"Bradley Hand", "Segoe Print", cursive',
            fontWeight: 700,
          }}
        >
          &ldquo;I can do it myself.&rdquo;
        </p>

        <div
          className="pointer-events-none absolute top-2 right-0 hidden w-[220px] lg:block"
          aria-hidden="true"
        >
          <p
            className="translate-x-6 -rotate-[14deg] text-[24px] leading-normal tracking-[-0.96px] whitespace-nowrap text-accent-mint"
            style={{
              fontFamily: '"Bradley Hand", "Segoe Print", cursive',
              fontWeight: 700,
            }}
          >
            &ldquo;I can do it myself.&rdquo;
          </p>
          <div className="mt-1 ml-[4.5rem] flex h-[57px] w-[74px] items-center justify-center">
            <div className="h-[54px] w-[71px] -scale-y-100 rotate-[-177.24deg]">
              <span className="relative block h-[54px] w-[71px]">
                <img
                  src={scribble}
                  alt=""
                  width={71}
                  height={54}
                  className="absolute inset-0 block size-full max-w-none"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-14">
          <div className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[419fr_309fr_528fr]">
              <div
                data-reveal="item"
                data-hover="zoom"
                className="relative aspect-[419/292] overflow-hidden rounded-lg lg:aspect-auto lg:h-[292px]"
              >
                <OptimizedImage
                  src={classroom}
                  alt="A teacher and students sitting on a classroom rug during a group activity"
                  className="absolute inset-0 size-full max-w-none object-cover object-top"
                />
              </div>
              <FeatureTile tile={weekly} />
              <div className="relative sm:col-span-2 lg:col-span-1">
                <FeatureTile tile={parent} className="max-sm:pr-40" />
                <div
                  className="pointer-events-none absolute -top-6 right-0 z-10 h-[185px] w-[179px] sm:-top-10 sm:h-[252px] sm:w-[244px] lg:-top-[7.7rem] lg:h-[336px] lg:w-[326px]"
                  aria-hidden="true"
                >
                  <div className="origin-top-right scale-[0.55] sm:scale-75 lg:scale-100">
                    <StudentPortrait />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[287fr_376fr_311fr_262fr]">
              <FeatureTile tile={bonding} />
              <FeatureTile tile={grandparents} />
              <div
                data-reveal="item"
                data-hover="zoom"
                className="relative aspect-[311/292] overflow-hidden rounded-lg lg:aspect-auto lg:h-[292px]"
              >
                <OptimizedImage
                  src={astronaut}
                  alt="A child in a cardboard astronaut costume"
                  className="absolute max-w-none"
                  style={{
                    height: '100%',
                    left: '-12.99%',
                    top: '0',
                    width: '140.84%',
                  }}
                />
              </div>
              <FeatureTile tile={openHouse} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
