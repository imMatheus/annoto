import { Hono } from "hono"
import { db, organizationTable } from "@repo/db"

export const app = new Hono()

app.get("/", async (c) => {
  await db.insert(organizationTable).values({
    name: "Adam's Org",
  })

  const orgs = await db.select().from(organizationTable)
  return c.json({ orgs })
})
