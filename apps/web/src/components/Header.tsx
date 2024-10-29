import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { Button } from "@/components/ui/button"

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      bg="bg.subtle"
      justify="space-between"
      align="center"
      p={4}
    >
      <Text
        textStyle="2xl"
        fontWeight={700}
        fontStyle="italic"
        color="yellow.400"
      >
        Annoto
      </Text>
      <Button size="sm">Login</Button>
    </Flex>
  )
}
