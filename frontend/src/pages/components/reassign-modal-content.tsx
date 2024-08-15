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
import { EthereumAddressFormat } from "../../shared/models"

type AllocateModalContentProps = {
  onClose: () => void
}

type ReassignForm = {
  newUser: EthereumAddressFormat
}

export const ReassignModalContent = ({ onClose }: AllocateModalContentProps) => {
  const { register, handleSubmit } = useForm<ReassignForm>()

  const { writeContractAsync } = useWriteContract()

  const onSubmit: SubmitHandler<ReassignForm> = ({ newUser }) => {
    writeContractAsync({
      abi: Mileage__factory.abi,
      address: MILEAGE_ADDRESS,
      functionName: "transferOwnership",
      args: [newUser],
    })
    onClose()
  }

  return (
    <ModalContent>
      <ModalHeader>Transfer Contract Ownership</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody as={Flex} gap={5} direction="column">
          <FormControl>
            <FormLabel>New user address (0x...)</FormLabel>
            <Input {...register("newUser")} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={2} variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue" mr={3} type="submit">
            Transfer Ownership
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  )
}
