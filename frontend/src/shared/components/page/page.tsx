import { Flex } from "@chakra-ui/react"
import React from "react"
import { PageBody, PageHeader, PageHeaderActions, PageTitle } from "./atoms"
import { PageNav } from "./atoms/page-nav"

type PageProps = React.HTMLAttributes<HTMLElement>

type PageComponent = React.FC<PageProps> & {
  Body: typeof PageBody
  Header: typeof PageHeader
  HeaderActions: typeof PageHeaderActions
  Nav: typeof PageNav
  Title: typeof PageTitle
}

export const Page: PageComponent = ({ children, ...rest }) => (
  <Flex
    {...rest}
    as="main"
    css={{
      overflow: "hidden",
      display: "flex",
      flex: 1,
      flexDirection: "column",
    }}
  >
    {children}
  </Flex>
)

Page.Body = PageBody
Page.Header = PageHeader
Page.HeaderActions = PageHeaderActions
Page.Nav = PageNav
Page.Title = PageTitle
