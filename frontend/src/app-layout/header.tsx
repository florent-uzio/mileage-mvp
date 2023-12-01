import { Box, Container, HStack, Heading } from "@chakra-ui/react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

type HeaderProps = {
  children?: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  // const {} = useConfig({})
  return (
    <Box boxShadow="md" bg="bg.surface" position="relative" zIndex="tooltip">
      <Container maxW="7xl" py="4">
        <HStack justifyContent="space-between">
          <Heading>Mileage</Heading>
          {children}
          <ConnectButton />
        </HStack>
      </Container>
    </Box>
  )
}
