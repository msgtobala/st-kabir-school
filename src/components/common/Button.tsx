import type { ComponentProps, Ref } from 'react'
import { Link } from 'react-router'
import { usePressHover } from '@/hooks/useMotion'
import { stayOnPageIfUnready } from '@/lib/navigation'
import type { ButtonProps, ButtonVariant } from '@/models/common/button'
import { arrowForward } from '@/resources/icons'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-coral px-8 py-[14px] font-semibold text-white rounded-3xl hover:brightness-95 sm:px-14 sm:py-[18px]',
  secondary:
    'border border-solid border-navy-soft/40 px-5 py-3 font-medium text-navy-soft rounded-3xl hover:border-navy-soft/70 sm:px-[26px] sm:py-4',
  tertiary:
    'bg-stage-foundation-chip px-6 py-3 font-semibold uppercase text-navy rounded-full shadow-gold hover:brightness-95 sm:px-9 sm:py-4',
}

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

function TrailingIcon() {
  return (
    <span className="relative size-6 shrink-0" aria-hidden="true">
      <img
        src={arrowForward}
        alt=""
        width={24}
        height={24}
        className="absolute inset-0 block size-full max-w-none"
      />
    </span>
  )
}

export function Button({
  variant = 'primary',
  showIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const pressRef = usePressHover<HTMLAnchorElement | HTMLButtonElement>()
  const withIcon = showIcon ?? variant === 'secondary'
  const classes = cx(
    'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-sans text-base leading-5 will-change-transform transition-[filter,border-color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    className,
  )

  const content = (
    <>
      {children}
      {withIcon ? <TrailingIcon /> : null}
    </>
  )

  if ('to' in props && props.to != null) {
    const { to, onClick, ...linkProps } = props
    return (
      <Link
        ref={pressRef as Ref<HTMLAnchorElement>}
        to={to}
        className={classes}
        {...linkProps}
        onClick={(event) => {
          stayOnPageIfUnready(event, to)
          onClick?.(event)
        }}
      >
        {content}
      </Link>
    )
  }

  const buttonProps = props as ComponentProps<'button'>
  const { type = 'button', ...rest } = buttonProps

  return (
    <button
      ref={pressRef as Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  )
}
