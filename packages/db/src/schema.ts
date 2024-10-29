import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

// export const users = pgTable("users", {
//   id: uuid("id").primaryKey().defaultRandom(),
//   email: text("email").notNull().unique(),
//   name: text("name"),
//   createdAt: timestamp("created_at").defaultNow().notNull(),
//   updatedAt: timestamp("updated_at").defaultNow().notNull(),
// })

export const organizationTable = pgTable("organization", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// Add more schemas as needed
