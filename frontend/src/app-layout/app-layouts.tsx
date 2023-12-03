import { Flex, chakra } from "@chakra-ui/react"
import { Header } from "./header"

type AppLayoutProps = {
  children: React.ReactNode
}

const StyledPage = chakra(Flex, {
  baseStyle: {
    width: "100vw",
    height: "100vh",
    flexWrap: "wrap",
    overflow: "hidden",
    flexDirection: "column",
  },
})

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <StyledPage>
      <Header />
      {children}
    </StyledPage>
  )
}
