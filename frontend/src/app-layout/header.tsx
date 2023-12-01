import { Box, Container, HStack } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Logo } from "./logo"

type HeaderProps = {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <Box boxShadow="md" bg="bg.surface" position="relative" zIndex="modal">
      <Container maxW="7xl" py="4">
        <HStack justifyContent="space-between">
          {/* <Heading>Mileage</Heading> */}
          <Logo />
          {children}
          <ConnectButton showBalance />
        </HStack>
      </Container>
    </Box>
  )
}
