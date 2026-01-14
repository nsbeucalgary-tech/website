"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (email !== "admin@nsbe.org" || password !== "password123") {
        return { error: "Invalid credentials" };
    }

    (await cookies()).set("admin_session", "true", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
    });

    redirect("/admin");
}

export async function adminLogoutAction() {
    (await cookies()).delete("admin_session");
    redirect("/");
}

