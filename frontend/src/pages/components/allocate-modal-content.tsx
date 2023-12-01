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
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContractWrite } from "wagmi"
import { Mileage__factory } from "../../contracts"
import { contractAddress } from "../../shared/constants"

type AllocateModalContentProps = {
  onClose: () => void
}

type AllocateForm = {
  user: `0x${string}`
  startLocation: string
  endLocation: string
  startTime: bigint
  endTime: bigint
  totalDistance: bigint
  travelDuration: string
}

export const AllocateModalContent = ({ onClose }: AllocateModalContentProps) => {
  const { register, handleSubmit } = useForm<AllocateForm>()

  const { write: allocateTrip } = useContractWrite({
    address: contractAddress,
    abi: Mileage__factory.abi,
    functionName: "allocateTrip",
  })

  const onSubmit: SubmitHandler<AllocateForm> = ({
    user,
    startLocation,
    endLocation,
    startTime,
    endTime,
    totalDistance,
    travelDuration,
  }) => {
    allocateTrip({
      args: [user, startLocation, endLocation, startTime, endTime, totalDistance, travelDuration],
    })
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
            <FormLabel>Start time</FormLabel>
            <NumberInput min={10}>
              <NumberInputField {...register("startTime")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>End time</FormLabel>
            <NumberInput min={10}>
              <NumberInputField {...register("endTime")} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>Total distance</FormLabel>
            <Input {...register("totalDistance")} />
          </FormControl>

          <FormControl>
            <FormLabel>Travel duration (hours)</FormLabel>
            <Input {...register("travelDuration")} />
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
