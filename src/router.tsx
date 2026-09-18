import { createBrowserRouter } from 'react-router'
import { Layout } from '@/components/common'
import { AdmissionsPage } from '@/pages/AdmissionsPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { LearningPage } from '@/pages/LearningPage'
import { LifeAtSchoolPage } from '@/pages/LifeAtSchoolPage'
import { ThankYouPage } from '@/pages/ThankYouPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'learning', Component: LearningPage },
      { path: 'life-at-school', Component: LifeAtSchoolPage },
      { path: 'admissions', Component: AdmissionsPage },
      { path: 'contact', Component: ContactPage },
      { path: 'thank-you', Component: ThankYouPage },
    ],
  },
], { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' })
