import { Flex, Heading, Image } from "@chakra-ui/react"

export const Logo = () => {
  return (
    <Flex alignItems="center" gap="2">
      <Image boxSize="60px" src="https://media.giphy.com/media/3ohs7K8l2xVqyHwfGE/giphy.gif" />
      <Heading fontWeight="bold" size="md">
        MileageMe
      </Heading>
    </Flex>
  )
}
