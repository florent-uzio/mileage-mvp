import { Flex, FlexProps } from "@chakra-ui/react"

type PageHeaderProps = FlexProps

/**
 * Child component for Page that renders a title, as well as optional action and children.
 * @param {Object} props Component props
 * @param {boolean} [props.borderless] Optional boolean to hide the bottom border. Useful for pages that have tab navigation below the title.
 * @returns PageHeader content
 */
export const PageHeader = ({ children, ...rest }: PageHeaderProps) => {
  return (
    <Flex
      {...rest}
      alignItems="flex-start"
      as="header"
      columnGap={5}
      justifyContent="space-between"
      // margin={[5, 5, 4]}
      marginTop={10}
      marginX={10}
      marginBottom={8}
      rowGap={4}
      wrap="wrap"
    >
      {children}
    </Flex>
  )
}
