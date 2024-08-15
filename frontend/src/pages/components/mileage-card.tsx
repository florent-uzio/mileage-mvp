import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Heading,
  Image,
} from "@chakra-ui/react"
import { useAccount, useWriteContract } from "wagmi"
import { Mileage__factory } from "../../contracts"
import { DetailList } from "../../shared/components"
import { MILEAGE_ADDRESS } from "../../shared/constants"
import { TripInformation } from "../../shared/models"

type MileageCardProps = TripInformation &
  CardProps & {
    openEditModal: (tripInfo: TripInformation) => void
    isOwner: boolean
  }

export const MileageCard = ({
  tripId,
  startLocation,
  endLocation,
  totalDistance,
  openEditModal,
  isOwner,
  ...rest
}: MileageCardProps) => {
  const { address } = useAccount()
  const { writeContractAsync } = useWriteContract()
  const onDeleteHandler = () => {
    if (!address) return
    writeContractAsync({
      abi: Mileage__factory.abi,
      address: MILEAGE_ADDRESS,
      functionName: "deleteTrip",
      args: [address, tripId],
    }).then()
  }

  return (
    <Card {...rest}>
      <CardHeader>
        <Image
          src="https://media.giphy.com/media/3ohs7K8l2xVqyHwfGE/giphy.gif"
          alt="car"
          boxSize={44}
        />

        <Heading size="md">{`Mileage Report ID: ${tripId}`}</Heading>
      </CardHeader>
      <CardBody>
        <DetailList>
          <DetailList.Pair label="Start Location" value={startLocation} />
          <DetailList.Pair label="End Location" value={endLocation} />
          <DetailList.Pair label="Total Distance (Km)" value={totalDistance.toString()} />
        </DetailList>
      </CardBody>
      {isOwner && (
        <CardFooter justifyContent="space-around">
          <>
            <Button size="sm" colorScheme="red" onClick={onDeleteHandler}>
              Delete
            </Button>

            <Button
              size="sm"
              colorScheme="blue"
              onClick={() => openEditModal({ tripId, totalDistance, startLocation, endLocation })}
            >
              Edit
            </Button>
          </>
        </CardFooter>
      )}
    </Card>
  )
}
