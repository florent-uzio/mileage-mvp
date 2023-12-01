import { Text } from "@chakra-ui/react"
import { Page } from "../shared/components"

export const HomePage = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Title title="Home" />
      </Page.Header>

      <Page.Body>
        <Text>HOME</Text>
      </Page.Body>
    </Page>
  )
}
