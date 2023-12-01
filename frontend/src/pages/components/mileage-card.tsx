import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react"
import { DetailList } from "../../shared/components"

type MileageCardProps = {
  tripId: bigint
  startLocation: string
  endLocation: string
  startTime: bigint
  endTime: bigint
  totalDistance: bigint
  travelDuration: string
}

export const MileageCard = ({
  tripId,
  startLocation,
  endLocation,
  startTime,
  endTime,
  totalDistance,
  travelDuration,
}: MileageCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{`Mileage Report ${tripId}}`}</Heading>
      </CardHeader>
      <CardBody>
        <DetailList>
          <DetailList.Pair label="Start Location" value={startLocation} />
          <DetailList.Pair label="End Location" value={endLocation} />
          <DetailList.Pair label="Start Time" value={startTime.toString()} />
          <DetailList.Pair label="End Time" value={endTime.toString()} />
          <DetailList.Pair label="Total Distance" value={totalDistance.toString()} />
          <DetailList.Pair label="Travel Distance" value={travelDuration} />
        </DetailList>
      </CardBody>
    </Card>
  )
}
