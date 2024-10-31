import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"
import { Box, Grid, Group, SimpleGrid, Text } from "@chakra-ui/react"
import { organizationTable, db } from "@repo/db"
import { EmptyState } from "@/components/ui/empty-state"
import { Building2 } from "lucide-react"
import { CreateOrganizationDialog } from "./CreateOrganizationDialog"
import Link from "next/link"

export default async function OrganizationsPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  const orgs = await db.select().from(organizationTable)

  return (
    <Box p={4}>
      <Box>
        <Text textStyle="2xl" fontWeight={700}>
          Organizations
        </Text>
        <Text color="fg.muted" textStyle="sm" mb={2}>
          Hello {data.user.email}
        </Text>
        <CreateOrganizationDialog />
      </Box>

      <Box mt={4}>
        {!orgs || orgs.length === 0 ? (
          <EmptyState
            icon={<Building2 />}
            title="No organizations"
            description="Create an organization to get started"
          >
            <Group>
              <CreateOrganizationDialog />
            </Group>
          </EmptyState>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
            {orgs.map((org) => (
              <Link key={org.id} href={`/organizations/${org.id}`}>
                <Box
                  border="1px dashed"
                  borderColor="border.muted"
                  p={4}
                  borderRadius="sm"
                >
                  <Text>{org.name}</Text>
                  <Text textStyle="xs" color="fg.muted">
                    {org.createdAt.toLocaleDateString()}
                  </Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  )
}
