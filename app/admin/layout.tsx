import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* <Sidebar /> */}

            <div className="flex-1 flex flex-col">
                {/* <AdminHeader /> */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
