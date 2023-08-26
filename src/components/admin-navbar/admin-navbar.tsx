import Link from 'next/link'
import { NavbarProps } from 'sanity'
import React, { CSSProperties } from 'react'

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'var(--chakra-colors-pink-500)',
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
