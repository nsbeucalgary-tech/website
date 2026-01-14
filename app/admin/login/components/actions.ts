"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { compare } from "bcryptjs";
import { getAdmin } from "@/app/lib/adminCall";

export async function loginAdmin(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
        return { error: "Email and password required" };
    }

    // 1️⃣ Query DB for this admin
    const admin = await getAdmin(username);

    if (!admin || admin.length === 0) {
        return { error: "Invalid credentials" };
    }

    // 2️⃣ Compare password with hash
    const valid = await compare(password, admin[0].admin_password);
    if (!valid) {
        return { error: "Invalid credentials" };
    }

    // 3️⃣ Set cookie
    (
        await // 3️⃣ Set cookie
        cookies()
    ).set("admin_session", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 10, // 10-minute session
    });

    // 4️⃣ Redirect to admin dashboard
    redirect("/admin");
}

export async function adminLogoutAction() {
    (await cookies()).delete("admin_session");
    redirect("/");
}
