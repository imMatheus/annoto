import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"

export const Header: React.FC = async () => {
  const client = await createClient()
  const { data } = await client.auth.getUser()
  const user = data.user
  console.log({ user })

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
      {user ? (
        <Button size="sm">Logout</Button>
      ) : (
        <Link href="/login">
          <Button size="sm">Login</Button>
        </Link>
      )}
    </Flex>
  )
}
