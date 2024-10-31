import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"
import { Box, Text } from "@chakra-ui/react"

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return (
    <Box p={4}>
      <Box>
        <Text textStyle="2xl" fontWeight={700}>
          Dashboard
        </Text>
        <Text color="fg.muted" textStyle="sm">
          Hello {data.user.email}
        </Text>
      </Box>
    </Box>
  )
}
