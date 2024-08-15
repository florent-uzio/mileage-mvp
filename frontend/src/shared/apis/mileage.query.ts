import { useReadContract, useWatchContractEvent } from "wagmi"
import { Mileage__factory } from "../../contracts"
import contractDetails from "../../contracts/contract-address.json"
import { MILEAGE_ADDRESS } from "../constants"
import { EthereumAddressFormat } from "../models"

export const useOwner = () => {
  return useReadContract({
    abi: Mileage__factory.abi,
    address: contractDetails.address as EthereumAddressFormat,
    functionName: "owner",
    // watch: true,
  })
}

export const useUserTrips = (userAddress: EthereumAddressFormat) => {
  return useReadContract({
    abi: Mileage__factory.abi,
    address: contractDetails.address as EthereumAddressFormat,
    functionName: "getAllTripsForUser",
    args: [userAddress],
    // watch: true,
  })
}

export const useTripAllocatedEvent = (action: any) => {
  return useWatchContractEvent({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    eventName: "TripAllocated",
    onLogs: () => {
      action()
    },
  })
}

export const useTripDeletedEvent = (action: any) => {
  return useWatchContractEvent({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    eventName: "TripDeleted",
    onLogs: () => {
      action()
    },
  })
}

export const useTripUpdatedEvent = (action: any) => {
  useWatchContractEvent({
    address: MILEAGE_ADDRESS,
    abi: Mileage__factory.abi,
    eventName: "TripUpdated",
    onLogs: () => {
      action()
    },
  })
}

export const useOwnershipTransferredEvent = (action: any) => {
  return useWatchContractEvent({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    eventName: "OwnershipTransferred",
    onLogs: () => {
      action()
    },
  })
}
