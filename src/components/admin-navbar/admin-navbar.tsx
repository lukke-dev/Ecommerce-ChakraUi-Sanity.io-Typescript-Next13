import Link from 'next/link'
import { NavbarProps } from 'sanity'
import { colors } from '@src/config/themes'
import React, { CSSProperties } from 'react'

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: colors.brand.primary,
}

export const AdminNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div
        style={{
          padding: '0.6rem 2rem',
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Link href="/" style={linkStyle}>
          Back Home
        </Link>
        <Link href="/products" style={linkStyle}>
          View Products
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}
