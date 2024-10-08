import { Button, Modal, ModalOverlay, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { useAccount } from "wagmi"
import { useOwner, useUserTrips } from "../shared/apis"
import { Page } from "../shared/components"
import { TripInformation } from "../shared/models"
import {
  AllocateModalContent,
  EditModalContent,
  MileageCard,
  ReassignModalContent,
} from "./components"

export const HomePage = () => {
  const { address = "0x" } = useAccount()
  // const toast = useToast()
  const [tripInformation, seTripInformation] = useState<TripInformation>()
  const { data: owner } = useOwner()
  const { data: userTrips = [] } = useUserTrips(address)
  // useTripAllocatedEvent(() => {
  //   toast({
  //     status: "success",
  //     isClosable: true,
  //     title: "Trip successfully allocated",
  //   })
  // })
  // useTripDeletedEvent(() => {
  //   toast({
  //     status: "success",
  //     isClosable: true,
  //     title: "Trip successfully deleted",
  //   })
  // })
  // useWatchContractEvent({
  //   address: MILEAGE_ADDRESS,
  //   abi: Mileage__factory.abi,
  //   eventName: "TripUpdated",
  //   args: { user: null },
  //   onLogs: (logs) => {
  //     console.log(logs)
  //     console.log("EDITED !")
  //   },
  //   onError: (error) => {
  //     console.log("Error", error)
  //   },
  // })
  // useTripUpdatedEvent(() => {
  //   console.log("EDITED !")
  //   toast({
  //     status: "success",
  //     isClosable: true,
  //     title: "Trip successfully updated",
  //   })
  // })
  // useOwnershipTransferredEvent(() => {
  //   toast({
  //     status: "success",
  //     isClosable: true,
  //     title: "Ownership transferred successfully",
  //   })
  // })

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  const {
    isOpen: isReassignOpen,
    onOpen: onReassignOpen,
    onClose: onReassignClose,
  } = useDisclosure()
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
            <Button variant="outline" colorScheme="blue" onClick={onReassignOpen}>
              Reassign Contract
            </Button>
            <Button colorScheme="blue" onClick={onOpen}>
              Allocate Mileage
            </Button>
          </Page.HeaderActions>
        )}
      </Page.Header>

      <Page.Body>
        {userTrips.length ? (
          <SimpleGrid columns={5} spacing={10}>
            {userTrips.map((userTrip) => {
              return (
                <MileageCard
                  key={userTrip.tripId}
                  {...userTrip}
                  openEditModal={openEditModal}
                  isOwner={isOwner}
                />
              )
            })}
          </SimpleGrid>
        ) : (
          <Text>No Mileage Data Found</Text>
        )}
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

      <Modal isCentered isOpen={isReassignOpen} onClose={onReassignClose}>
        <ModalOverlay />
        <ReassignModalContent onClose={onReassignClose} />
      </Modal>
    </Page>
  )
}
