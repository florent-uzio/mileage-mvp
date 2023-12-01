import { Button, Modal, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { Page } from "../shared/components"
import { AllocateModalContent } from "./components/allocate-modal-content"

export const HomePage = () => {
  // const { address = "0x" } = useAccount()
  // const { data: userTrips } = useContractRead({
  //   abi: Mileage__factory.abi,
  //   address: contractAddress,
  //   functionName: "userTrips",
  //   args: [address, BigInt(0)],
  //   enabled: !!address,
  // })
  // const { data: owner } = useContractRead({
  //   abi: Mileage__factory.abi,
  //   address: contractAddress,
  //   functionName: "owner",
  // })
  const { isOpen, onOpen, onClose } = useDisclosure()

  /**
   *   address user,
        string memory startLocation,
        string memory endLocation,
        uint256 startTime,
        uint256 endTime,
        uint256 totalDistance,
        string memory travelDuration
   */

  // const { config } = usePrepareContractWrite({
  //   address: contractAddress,
  //   abi: Mileage__factory.abi,
  //   functionName: "allocateTrip",
  //   // args: [
  //   //   "0x3bD2483a3A0DE66075F897FE37D784F26503503E",
  //   //   "marseille",
  //   //   "paris",
  //   //   BigInt(10),
  //   //   BigInt(20),
  //   //   BigInt(100),
  //   //   "1000",
  //   // ],
  // })

  //   const {
  //     data: allocateTripData,
  //     isLoading,
  //     isSuccess,
  //     write: allocateTrip,
  //   } = useContractWrite(config)

  // const {} = useContra
  // const read = async () => {
  //   if (!address) return

  //   const data = await readContract({
  //     address: contractAddress,
  //     abi: Mileage__factory.abi,
  //     functionName: "userTrips",
  //     args: [address, BigInt(1)],
  //   })

  //   data.
  // }
  // console.log(userTrips)
  return (
    <Page>
      <Page.Header>
        <Page.Title title="Home" />
        <Page.HeaderActions>
          <Button colorScheme="blue" onClick={onOpen}>
            Allocate Mileage
          </Button>
        </Page.HeaderActions>
      </Page.Header>

      <Page.Body>
        <Text>Allocate Trip</Text>
      </Page.Body>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <AllocateModalContent onClose={onClose} />
      </Modal>
    </Page>
  )
}
