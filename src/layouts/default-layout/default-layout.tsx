import { ReactNode } from 'react'
import { Footer, Navbar } from '@src/components'

export const DefaultLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
