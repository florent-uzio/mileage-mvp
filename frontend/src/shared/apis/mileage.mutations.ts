import { useContractWrite } from "wagmi"
import { Mileage__factory } from "../../contracts"
import contractDetails from "../../contracts/contract-address.json"
import { EthereumAddressFormat } from "../models"

export const useDeleteMileage = () => {
  return useContractWrite({
    abi: Mileage__factory.abi,
    address: contractDetails.address as EthereumAddressFormat,
    functionName: "deleteTrip",
  })
}

export const useUpdateTrip = () => {
  return useContractWrite({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    functionName: "updateTrip",
  })
}
