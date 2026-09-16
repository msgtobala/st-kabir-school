import { createContext, useContext } from 'react'
import type { EnquiryModalContextValue } from '@/models/common/enquiry'

export const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(
  null,
)

export function useEnquiryModal() {
  const value = useContext(EnquiryModalContext)
  if (!value) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  }
  return value
}
