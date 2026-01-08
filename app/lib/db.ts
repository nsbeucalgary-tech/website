import { neon } from "@neondatabase/serverless";

if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
    throw new Error("NEXT_PUBLIC_DATABASE_URL is not defined");
}

export const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
