'use client'

import { ReactNode } from 'react'
import { Navbar } from '@src/components'

export const DefaultLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>footer</footer>
    </>
  )
}
