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
import contractDetails from "../../contracts/contract-address.json"
import { EthereumAddressFormat } from "../../shared/models"

type AllocateModalContentProps = {
  onClose: () => void
}

type AllocateForm = {
  user: `0x${string}`
  startLocation: string
  endLocation: string
  totalDistance: bigint
}

export const AllocateModalContent = ({ onClose }: AllocateModalContentProps) => {
  const { register, handleSubmit } = useForm<AllocateForm>()

  const { writeContractAsync } = useWriteContract()

  const onSubmit: SubmitHandler<AllocateForm> = ({
    user,
    startLocation,
    endLocation,
    totalDistance,
  }) => {
    writeContractAsync({
      address: contractDetails.address as EthereumAddressFormat,
      abi: Mileage__factory.abi,
      functionName: "allocateTrip",
      args: [user, startLocation, endLocation, totalDistance],
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
            <FormLabel>Destination user address (0x...)</FormLabel>
            <Input {...register("user")} />
          </FormControl>

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
            Allocate Trip
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  )
}
