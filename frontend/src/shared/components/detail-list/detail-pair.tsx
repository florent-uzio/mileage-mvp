import { Text } from "@chakra-ui/react"

type DetailPairProps = {
  label: string
  textSize?: "base" | "sm"
  value: string | JSX.Element
}

export const DetailPair = ({ label, textSize = "base", value }: DetailPairProps) => (
  <>
    <Text as="dt" size="xs" css={{ color: "gray" }}>
      {label}
    </Text>
    <Text as="dd" size={textSize} css={{ m: 0 }}>
      {value}
    </Text>
  </>
)
