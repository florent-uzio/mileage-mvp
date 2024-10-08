import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useWriteContract } from "wagmi"
import { Mileage__factory } from "../../contracts"
import { MILEAGE_ADDRESS } from "../../shared/constants"
import { EthereumAddressFormat, TripInformation } from "../../shared/models"

type EditModalContentProps = {
  address: EthereumAddressFormat
  onClose: () => void
  tripInfo: TripInformation
}

type EditForm = Omit<TripInformation, "tripId">

export const EditModalContent = ({ address, onClose, tripInfo }: EditModalContentProps) => {
  const { register, handleSubmit } = useForm<EditForm>({
    defaultValues: {
      ...tripInfo,
    },
  })

  const { writeContractAsync } = useWriteContract()

  const onSubmit: SubmitHandler<EditForm> = ({ startLocation, endLocation, totalDistance }) => {
    writeContractAsync({
      abi: Mileage__factory.abi,
      address: MILEAGE_ADDRESS,
      functionName: "updateTrip",
      args: [address, tripInfo.tripId, startLocation, endLocation, totalDistance],
    })
    onClose()
  }

  return (
    <ModalContent>
      <ModalHeader>Allocate Trip</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody as={Flex} gap={5} direction="column">
          <FormControl>
            <FormLabel>Start location</FormLabel>
            <Input {...register("startLocation")} />
          </FormControl>

          <FormControl>
            <FormLabel>End location</FormLabel>
            <Input {...register("endLocation")} />
          </FormControl>

          <FormControl>
            <FormLabel>Total distance (Km)</FormLabel>
            <Input {...register("totalDistance")} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={2} variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue" mr={3} type="submit">
            Edit Trip
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  )
}
