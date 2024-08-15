import { useCallback } from "react"
import { useWriteContract } from "wagmi"
import { Mileage__factory } from "../../contracts"
import contractDetails from "../../contracts/contract-address.json"
import { MILEAGE_ADDRESS } from "../constants"
import { config } from "../helpers"
import { EthereumAddressFormat } from "../models"

export const useDeleteMileage = () => {
  // const { writeContractAsync } = useWriteContract({
  //   config,

  //   // address: "0x233asa",
  //   // abi: Mileage__factory.abi,
  //   // functionName: "deleteTrip",
  // })

  // return writeContractAsync({
  //   abi: Mileage__factory.abi,
  //   address: contractDetails.address as EthereumAddressFormat,
  //   functionName: "deleteTrip",
  //   args: [userAddress, mileageId],
  //   authorizationList: [],
  //   // address: "0x233asa",
  //   // abi: Mileage__factory.abi,
  //   // functionName: "deleteTrip",
  //   // chainId: evmSidechain.id
  // })

  const { writeContractAsync } = useWriteContract({ config }) // Adjust config if needed

  const deleteMileage = useCallback(
    async (address: EthereumAddressFormat | undefined, tripId: bigint) => {
      if (!address) {
        console.error("Address is undefined. Cannot execute deleteTrip.")
        return
      }

      try {
        return await writeContractAsync({
          abi: Mileage__factory.abi,
          address: MILEAGE_ADDRESS,
          functionName: "deleteTrip",
          args: [address, tripId],
        })
      } catch (error) {
        console.error("Error deleting trip:", error)
      }
    },
    [writeContractAsync, contractDetails.address],
  )

  return { deleteMileage }
}

export const useUpdateTrip = () => {
  return useWriteContract({
    config,
    // address: contractDetails.address,
    // abi: Mileage__factory.abi,
    // functionName: "updateTrip",
  })
}

export const useReassignOwner = () => {
  return useWriteContract({
    config,
    // address: contractDetails.address as EthereumAddressFormat,
    // abi: Mileage__factory.abi,
    // functionName: "transferOwnership",
  })
}
