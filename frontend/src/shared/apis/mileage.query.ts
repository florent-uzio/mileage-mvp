import { useContractEvent, useContractRead } from "wagmi"
import { Mileage__factory } from "../../contracts"
import contractDetails from "../../contracts/contract-address.json"
import { EthereumAddressFormat } from "../models"

export const useOwner = () => {
  return useContractRead({
    abi: Mileage__factory.abi,
    address: contractDetails.address as EthereumAddressFormat,
    functionName: "owner",
    watch: true,
  })
}

export const useUserTrips = (userAddress: EthereumAddressFormat) => {
  return useContractRead({
    abi: Mileage__factory.abi,
    address: contractDetails.address as EthereumAddressFormat,
    functionName: "getAllTripsForUser",
    args: [userAddress],
    watch: true,
  })
}

export const useTripAllocatedEvent = (action: any) => {
  return useContractEvent({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    eventName: "TripAllocated",
    listener() {
      action()
    },
  })
}

export const useTripDeletedEvent = (action: any) => {
  return useContractEvent({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    eventName: "TripDeleted",
    listener() {
      action()
    },
  })
}

export const useTripUpdatedEvent = (action: any) => {
  return useContractEvent({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    eventName: "TripUpdated",
    listener() {
      action()
    },
  })
}

export const useOwnershipTransferredEvent = (action: any) => {
  return useContractEvent({
    address: contractDetails.address as EthereumAddressFormat,
    abi: Mileage__factory.abi,
    eventName: "OwnershipTransferred",
    listener() {
      action()
    },
  })
}
