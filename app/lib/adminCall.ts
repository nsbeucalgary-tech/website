// app/lib/eventCall.ts
import { sql } from "@/app/lib/db";
import { Admin } from "@/app/lib/type";

export async function getAdmin(username:string): Promise<Admin[]> {
    const admins = await sql`
        SELECT *
        FROM admin
        WHERE admin_username = ${username} LIMIT 1
    `;

    return admins as Admin[];
}
