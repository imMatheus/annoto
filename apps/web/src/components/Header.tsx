import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { ColorModeButton } from "./ui/color-mode"

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
      <Flex align="center" gap={4}>
        <Text
          textStyle="2xl"
          fontWeight={700}
          fontStyle="italic"
          color="yellow.400"
        >
          Annoto
        </Text>
        {user && (
          <>
            <Link href="/organizations">
              <Text
                textStyle="sm"
                color="fg.muted"
                _hover={{ textDecoration: "underline" }}
              >
                Organizations
              </Text>
            </Link>
          </>
        )}
      </Flex>

      <Flex align="center" gap={2}>
        {user ? (
          <Button size="sm">Logout</Button>
        ) : (
          <Link href="/login">
            <Button size="sm">Login</Button>
          </Link>
        )}

        <ColorModeButton />
      </Flex>
    </Flex>
  )
}
