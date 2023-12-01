import { useContractRead } from "wagmi"
import { Mileage__factory } from "../../contracts"
import contractDetails from "../../contracts/contract-address.json"
import { EthereumAddressFormat } from "../models"

export const useOwner = () => {
  return useContractRead({
    abi: Mileage__factory.abi,
    address: contractDetails.address as EthereumAddressFormat,
    functionName: "owner",
  })
}

export const useUserTrips = (userAddress: EthereumAddressFormat) => {
  console.log({ userAddress })
  return useContractRead({
    abi: Mileage__factory.abi,
    address: contractDetails.address as EthereumAddressFormat,
    functionName: "getAllTripsForUser",
    args: [userAddress],
  })
}
