import {neon} from "@neondatabase/serverless"
import {drizzle} from 'drizzle-orm/neon-http'

const sql = neon("postgresql://neondb_owner:npg_LkIe9fijsa5b@ep-aged-cloud-a5kvpq4q-pooler.us-east-2.aws.neon.tech/Ai-Course-Generator?sslmode=require")
export const db = drizzle(sql)
