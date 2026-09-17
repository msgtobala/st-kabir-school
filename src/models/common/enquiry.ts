export type EnquiryFormValues = {
  childName: string
  branch: string
  age: string
  grade: string
  parentName: string
  mobile: string
  email: string
}

export type EnquiryModalContextValue = {
  open: () => void
  close: () => void
}
