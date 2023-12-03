import { HTMLAttributes } from "react"
import { Atom } from "../.."

type PageNavProps = HTMLAttributes<HTMLDivElement>

export const PageNav = ({ children, ...rest }: PageNavProps) => (
  <Atom {...rest} css={{ px: 5 }}>
    {children}
  </Atom>
)
