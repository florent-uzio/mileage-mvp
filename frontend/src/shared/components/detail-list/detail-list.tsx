import { chakra } from "@chakra-ui/react"
import type { FC, HTMLAttributes } from "react"
import { DetailPair } from "./detail-pair"

type DetailListProps = HTMLAttributes<HTMLDListElement>

type DetaiListComponentType = FC<DetailListProps> & {
  Pair: typeof DetailPair
}

const StyledDl = chakra("dl", {
  m: 0,
  "dd + dt": {
    mt: 3,
  },
})

export const DetailList: DetaiListComponentType = (props) => <StyledDl {...props} />

DetailList.Pair = DetailPair
