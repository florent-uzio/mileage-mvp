import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"

export type PageTitleProps = {
  children?: React.ReactNode
  className?: string
  subtitle?: string | JSX.Element
  title: string | JSX.Element
}

export const PageTitle = ({ children, subtitle, title, ...rest }: PageTitleProps) => {
  const content = (
    <Heading
      css={{
        display: "flex",
        alignItems: "center",
        gap: "2",
        wordBreak: "break-word",
      }}
      {...rest}
      size="xl"
      as="h1"
    >
      {title}
      {children}
    </Heading>
  )

  return subtitle ? (
    <Flex
      direction="column"
      gap={subtitle ? 1 : 2}
      css={{
        "@md": {
          maxW: "50%",
        },
      }}
    >
      {content}
      {!!subtitle && <Text>{subtitle}</Text>}
    </Flex>
  ) : (
    content
  )
}
