import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { OptimizedImage } from '@/components/common/OptimizedImage'
import { Button } from '@/components/common/Button'
import { enquiryBranches, enquiryCopy, enquiryGrades } from '@/config/enquiry'
import { EnquiryModalContext } from '@/hooks/useEnquiryModal'
import { cx } from '@/lib/cx'
import type { EnquiryFormValues } from '@/models/common/enquiry'
import { arrowRightSmall, chevronDown, close as closeIcon, sparkle } from '@/resources/icons'
import { enquiryPortrait } from '@/resources/images/enquiry'

const emptyForm: EnquiryFormValues = {
  childName: '',
  branch: '',
  age: '',
  grade: '',
  parentName: '',
  mobile: '',
  email: '',
}

function CloseButton({
  onClick,
  className,
  compact,
}: {
  onClick: () => void
  className?: string
  compact?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close enquiry form"
      className={cx(
        'cursor-pointer items-center justify-center hover:brightness-95',
        compact
          ? 'size-9 rounded-[18px] bg-[#f8fafc]'
          : 'size-[42px] rounded-[44px] bg-[#e9f0f7]',
        className,
      )}
    >
      <span className="relative size-[14px] shrink-0" aria-hidden="true">
        <img
          src={closeIcon}
          alt=""
          width={13}
          height={13}
          className="absolute inset-0 block size-full max-w-none"
        />
      </span>
    </button>
  )
}

function Field({
  id,
  label,
  required,
  children,
  className,
}: {
  id: string
  label: string
  required?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cx('flex w-full flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-[14px] font-medium leading-normal text-navy-soft"
      >
        {label}
        {required ? <span className="text-[#ef4444]">*</span> : null}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'h-[46px] w-full rounded-md border border-solid border-[#e2e8f0] bg-canvas px-4 py-3 text-[15px] font-normal leading-normal text-navy-soft outline-none placeholder:text-[#94a3b8] focus:border-navy-soft/40'

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState<EnquiryFormValues>(emptyForm)

  const close = () => {
    dialogRef.current?.close()
    setOpen(false)
  }

  const openModal = () => {
    setSubmitted(false)
    setValues(emptyForm)
    setOpen(true)
    dialogRef.current?.showModal()
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onClose = () => setOpen(false)
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const set =
    (key: keyof EnquiryFormValues) =>
    (event: { target: { value: string } }) => {
      setValues((current) => ({ ...current, [key]: event.target.value }))
    }

  return (
    <EnquiryModalContext.Provider value={{ open: openModal, close }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="enquiry-dialog m-auto w-[min(55.75rem,calc(100%-24px))] max-w-none border-0 bg-transparent p-0"
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
      >
        <div className="max-h-[min(44.4rem,calc(100svh-24px))] overflow-y-auto rounded-[24px] bg-canvas shadow-[0px_12px_32px_rgba(0,0,0,0.12)] lg:max-h-[min(44.4rem,calc(100svh-1.5rem))] lg:overflow-hidden lg:rounded-2xl lg:shadow-card">
          <div className="grid lg:grid-cols-[400px_minmax(0,1fr)]">
            <div className="relative overflow-hidden lg:min-h-[44.4rem]">
              <div className="relative isolate h-[240px] overflow-hidden lg:absolute lg:inset-x-0 lg:top-0 lg:bottom-[103px] lg:h-auto">
                <div className="absolute inset-0 z-[-1]">
                  <OptimizedImage
                    src={enquiryPortrait}
                    alt="A St. Kabir student writing in class"
                    className="absolute inset-0 size-full max-w-none object-cover object-center"
                    style={{ zIndex: -1 }}
                  />
                </div>
                <CloseButton
                  compact
                  onClick={close}
                  className="absolute top-4 right-4 z-10 flex lg:hidden"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-3 bg-stage-foundation p-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:rounded-tl-[40px] lg:px-8 lg:pt-8 lg:pb-10">
                <div className="flex items-center justify-between gap-3 lg:block">
                  <h3 className="font-normal text-navy">
                    <span className="block max-w-[236px] text-[24px] leading-[22px] lg:hidden">
                      {enquiryCopy.panelTitle.join(' ')}
                    </span>
                    <span className="hidden lg:block text-[32px] leading-8">
                      <span className="flex items-center justify-between gap-2">
                        <span className="whitespace-nowrap">
                          {enquiryCopy.panelTitle[0]}
                        </span>
                        <span className="relative size-6 shrink-0" aria-hidden="true">
                          <img
                            src={sparkle}
                            alt=""
                            width={24}
                            height={24}
                            className="absolute inset-0 block size-full max-w-none"
                          />
                        </span>
                      </span>
                      {enquiryCopy.panelTitle[1]}
                    </span>
                  </h3>
                  <span
                    className="relative flex size-6 shrink-0 items-center justify-center lg:hidden"
                    aria-hidden="true"
                  >
                    <span className="relative size-[18px]">
                      <img
                        src={sparkle}
                        alt=""
                        width={18}
                        height={18}
                        className="absolute inset-0 block size-full max-w-none"
                      />
                    </span>
                  </span>
                </div>
                <p className="font-normal text-[14px] leading-5 text-slate lg:text-[15px] lg:leading-[22px]">
                  {enquiryCopy.panelBody}
                </p>
              </div>
            </div>

            <form
              className="relative flex flex-col gap-6 p-5 lg:h-[44.4rem] lg:gap-0 lg:overflow-y-auto lg:px-10 lg:py-9"
              onSubmit={onSubmit}
            >
              <CloseButton
                onClick={close}
                className="absolute top-5 right-5 hidden lg:flex"
              />
              <div className="flex flex-col gap-2 lg:contents">
                <p className="text-[12px] font-medium tracking-[0.18px] text-coral uppercase">
                  {enquiryCopy.kicker}
                </p>
                <h2
                  id={titleId}
                  className="max-w-none font-medium text-[24px] leading-[30px] text-navy lg:mt-2 lg:max-w-[20rem] lg:text-[2rem] lg:leading-[1.15]"
                >
                  {enquiryCopy.title}
                </h2>
                <p className="font-normal text-[14px] leading-5 text-slate lg:mt-2 lg:max-w-[24rem] lg:text-[15px] lg:leading-[1.45]">
                  {enquiryCopy.intro}
                </p>
              </div>

              {submitted ? (
                <div className="mt-8">
                  <p className="font-medium text-lg text-navy">
                    {enquiryCopy.successTitle}
                  </p>
                  <p className="mt-2 text-sm leading-[1.45] text-slate">
                    {enquiryCopy.successBody}
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    className="mt-8 w-full"
                    showIcon={false}
                    onClick={close}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <>
                <div className="flex w-full flex-col gap-4 lg:mt-6">
                  <Field id="enquiry-child" label="Child's Name" required>
                    <input
                      id="enquiry-child"
                      name="childName"
                      autoComplete="name"
                      required
                      placeholder="Enter child's name"
                      value={values.childName}
                      onChange={set('childName')}
                      className={inputClass}
                    />
                  </Field>
                  <Field id="enquiry-branch" label="Select Branch" required>
                    <span className="relative block w-full">
                      <select
                        id="enquiry-branch"
                        name="branch"
                        required
                        value={values.branch}
                        onChange={set('branch')}
                        className={cx(
                          inputClass,
                          'appearance-none pr-10',
                          !values.branch && 'text-[#94a3b8]',
                        )}
                      >
                        <option value="" disabled>
                          Select branch
                        </option>
                        {enquiryBranches.map((branch) => (
                          <option key={branch} value={branch}>
                            {branch}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2">
                        <img
                          src={chevronDown}
                          alt=""
                          width={16}
                          height={16}
                          className="absolute inset-0 block size-full max-w-none"
                        />
                      </span>
                    </span>
                  </Field>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <Field id="enquiry-age" label="Age" required>
                      <input
                        id="enquiry-age"
                        name="age"
                        required
                        inputMode="numeric"
                        placeholder="e.g. 5 years"
                        value={values.age}
                        onChange={set('age')}
                        className={inputClass}
                      />
                    </Field>
                    <Field id="enquiry-grade" label="Grade of Interest" required>
                      <span className="relative block w-full">
                        <select
                          id="enquiry-grade"
                          name="grade"
                          required
                          value={values.grade}
                          onChange={set('grade')}
                          className={cx(
                            inputClass,
                            'appearance-none pr-10',
                            !values.grade && 'text-[#94a3b8]',
                          )}
                        >
                          <option value="" disabled>
                            Select grade
                          </option>
                          {enquiryGrades.map((grade) => (
                            <option key={grade} value={grade}>
                              {grade}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2">
                          <img
                            src={chevronDown}
                            alt=""
                            width={16}
                            height={16}
                            className="absolute inset-0 block size-full max-w-none"
                          />
                        </span>
                      </span>
                    </Field>
                  </div>
                  <Field id="enquiry-parent" label="Parent's Name" required>
                    <input
                      id="enquiry-parent"
                      name="parentName"
                      autoComplete="name"
                      required
                      placeholder="Enter parent's name"
                      value={values.parentName}
                      onChange={set('parentName')}
                      className={inputClass}
                    />
                  </Field>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <Field id="enquiry-mobile" label="Mobile Number" required>
                      <input
                        id="enquiry-mobile"
                        name="mobile"
                        type="tel"
                        autoComplete="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={values.mobile}
                        onChange={set('mobile')}
                        className={inputClass}
                      />
                    </Field>
                    <Field id="enquiry-email" label="Email Address">
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={set('email')}
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-3 lg:mt-6">
                    <Button
                      type="submit"
                      variant="primary"
                      showIcon={false}
                      className="h-12 w-full gap-2 rounded-[24px] !px-8 py-[14px] text-[15px] shadow-[0px_4px_6px_rgba(243,120,103,0.2)] sm:!px-8"
                    >
                      {enquiryCopy.submit}
                      <span className="relative size-[14px] shrink-0 lg:size-4" aria-hidden="true">
                        <img
                          src={arrowRightSmall}
                          alt=""
                          width={14}
                          height={14}
                          className="absolute inset-0 block size-full max-w-none"
                        />
                      </span>
                    </Button>
                    <p className="text-center text-[13px] leading-[18px] text-[#94a3b8]">
                      {enquiryCopy.footnote}
                    </p>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </dialog>
    </EnquiryModalContext.Provider>
  )
}
