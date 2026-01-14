import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/app/lib/auth";

export default async function AdminProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isAuthed = await isAdminAuthenticated();

    if (!isAuthed) {
        redirect("/admin/login");
    }

    return <>{children}</>;
}
