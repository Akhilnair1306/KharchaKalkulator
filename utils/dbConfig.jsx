import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://account:uA1kR7LlyHOP@ep-misty-frost-a5bonhmr.us-east-2.aws.neon.tech/expense-tracker?sslmode=require');
export const db = drizzle(sql,{schema});