import { Flex } from "@chakra-ui/react"
import React from "react"
import { pageClasses } from "../page.constants"

type PageHeaderActionsProps = {
  children: React.ReactNode
  colGap?: number
}

/**
 * Component to regroup multiple actions or elements to display on the right side of the page.
 * The children are aligned horizontally.
 *
 * @param {number} colGap Optional, sets the space between the children elements.
 * @returns A {@link React.FC}
 */
export const PageHeaderActions = ({ children, colGap = 3 }: PageHeaderActionsProps) => {
  return (
    <Flex className={pageClasses.headerActions} alignItems="center" columnGap={colGap}>
      {children}
    </Flex>
  )
}
