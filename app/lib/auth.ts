import { cookies } from "next/headers";

export async function isAdminAuthenticated() {
    const cookieStore = await cookies();
    const adminSession = cookieStore.get("admin_session");

    return Boolean(adminSession?.value);
}
