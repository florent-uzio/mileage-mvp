import { useContractRead } from "wagmi"
import { Mileage__factory } from "../../contracts"
import { contractAddress } from "../constants"

export const useOwner = () => {
  return useContractRead({
    abi: Mileage__factory.abi,
    address: contractAddress,
    functionName: "owner",
  })
}

export const useUserTrips = (userAddress: string) => {
  return useContractRead({
    abi: Mileage__factory.abi,
    address: contractAddress,
    functionName: "userTrips",
  })

  // const userTrips = data.
}
