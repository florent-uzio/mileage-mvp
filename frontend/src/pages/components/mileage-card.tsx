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
import { useAccount } from "wagmi"
import { useDeleteMileage } from "../../shared/apis"
import { DetailList } from "../../shared/components"

type MileageCardProps = {
  tripId: bigint
  startLocation: string
  endLocation: string
  totalDistance: bigint
} & CardProps

export const MileageCard = ({
  tripId,
  startLocation,
  endLocation,
  totalDistance,
  ...rest
}: MileageCardProps) => {
  const { address } = useAccount()
  const { write: deleteMileage } = useDeleteMileage()
  const onDeleteHandler = () => {
    if (!address) return
    deleteMileage({ args: [address, tripId] })
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
      <CardFooter justifyContent="space-around">
        <Button size="sm" colorScheme="red" onClick={onDeleteHandler}>
          Delete
        </Button>
        <Button size="sm" colorScheme="blue">
          Edit
        </Button>
      </CardFooter>
    </Card>
  )
}
