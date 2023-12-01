import { Button, Modal, ModalOverlay, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import { useAccount } from "wagmi"
import { useOwner, useUserTrips } from "../shared/apis"
import { Page } from "../shared/components"
import { AllocateModalContent } from "./components/allocate-modal-content"

export const HomePage = () => {
  const { address = "0x" } = useAccount()
  const { data: owner } = useOwner()
  const { data: userTrips } = useUserTrips(address)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const isOwner = owner === address
  console.log({ userTrips, owner })
  return (
    <Page>
      <Page.Header>
        <Page.Title title="Home" />
        {isOwner && (
          <Page.HeaderActions>
            <Button colorScheme="blue" onClick={onOpen}>
              Allocate Mileage
            </Button>
          </Page.HeaderActions>
        )}
      </Page.Header>

      <Page.Body>
        <SimpleGrid columns={5} spacing={10}>
          {}
        </SimpleGrid>
      </Page.Body>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <AllocateModalContent onClose={onClose} />
      </Modal>
    </Page>
  )
}
