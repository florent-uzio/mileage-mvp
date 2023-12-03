import { chakra } from "@chakra-ui/react"
import { FC, HTMLAttributes } from "react"
import { pageClasses } from "../page.constants"

type PageBodyProps = HTMLAttributes<HTMLDivElement>

const StyledDiv = chakra("div", {
  baseStyle: {
    flex: 1,
    paddingTop: 0,
    paddingX: 10,
    paddingBottom: 16,
    overflowY: "auto",
    [`.${pageClasses.nav} + &`]: {
      pt: 3,
    },
  },
})

export const PageBody: FC<PageBodyProps> = ({ className, children, ...rest }) => (
  <StyledDiv {...rest}>{children}</StyledDiv>
)
