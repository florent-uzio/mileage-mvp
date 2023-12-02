import { Button, Modal, ModalOverlay, SimpleGrid, useDisclosure, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useAccount } from "wagmi"
import {
  useOwner,
  useTripAllocatedEvent,
  useTripDeletedEvent,
  useTripUpdatedEvent,
  useUserTrips,
} from "../shared/apis"
import { Page } from "../shared/components"
import { TripInformation } from "../shared/models"
import { AllocateModalContent, EditModalContent, MileageCard } from "./components"

export const HomePage = () => {
  const { address = "0x" } = useAccount()
  const toast = useToast()
  const [tripInformation, seTripInformation] = useState<TripInformation>()
  const { data: owner } = useOwner()
  const { data: userTrips = [], refetch } = useUserTrips(address)
  useTripAllocatedEvent(() => {
    refetch()
    toast({
      status: "success",
      isClosable: true,
      title: "Trip successfully allocated",
    })
  })
  useTripDeletedEvent(() => {
    refetch()
    toast({
      status: "success",
      isClosable: true,
      title: "Trip successfully deleted",
    })
  })
  useTripUpdatedEvent(() => {
    refetch()
    toast({
      status: "success",
      isClosable: true,
      title: "Trip successfully updated",
    })
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  const isOwner = owner === address

  const openEditModal = (tripInfo: TripInformation) => {
    seTripInformation(tripInfo)

    onEditOpen()
  }

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
          {userTrips.map((userTrip) => {
            return (
              <MileageCard
                key={userTrip.tripId}
                {...userTrip}
                cursor="pointer"
                openEditModal={openEditModal}
              />
            )
          })}
        </SimpleGrid>
      </Page.Body>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <AllocateModalContent onClose={onClose} />
      </Modal>

      <Modal isCentered isOpen={isEditOpen && !!tripInformation} onClose={onEditClose}>
        <ModalOverlay />
        {tripInformation && (
          <EditModalContent onClose={onEditClose} tripInfo={tripInformation} address={address} />
        )}
      </Modal>
    </Page>
  )
}
