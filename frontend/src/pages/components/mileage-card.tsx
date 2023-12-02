import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react"
import { DetailList } from "../../shared/components"

type MileageCardProps = {
  tripId: bigint
  startLocation: string
  endLocation: string
  totalDistance: bigint
}

export const MileageCard = ({
  tripId,
  startLocation,
  endLocation,
  totalDistance,
}: MileageCardProps) => {
  return (
    <Card>
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
    </Card>
  )
}
