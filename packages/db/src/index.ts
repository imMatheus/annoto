import { drizzle } from "drizzle-orm/postgres-js"
// import { createClient } from "@supabase/supabase-js"
import postgres from "postgres"
import dotenv from "dotenv"
import * as schema from "./schema"

dotenv.config({ path: "../env" })

// Environment variables validation
const requiredEnvVars = [
  "DATABASE_URL",
  // "SUPABASE_URL",
  // "SUPABASE_ANON_KEY",
] as const

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`)
  }
}

// // Create Supabase client
// export const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_ANON_KEY!
// )

// Create Postgres connection
const queryClient = postgres(process.env.DATABASE_URL!)

// Create Drizzle client
export const db = drizzle(queryClient, { schema })

// Export schema
export * from "./schema"
