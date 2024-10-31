"use server"

import { db, organizationTable } from "@repo/db"

export async function createOrganizationAction(name: string) {
  const [data] = await db
    .insert(organizationTable)
    .values({
      name,
    })
    .returning()

  return data
}
