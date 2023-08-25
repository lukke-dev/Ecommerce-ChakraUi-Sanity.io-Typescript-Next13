import { ReactNode } from 'react'

export const EmptyLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>
}
