import Link from "next/link";
import { Calendar, Users, Handshake } from "lucide-react";
import { colors } from "@/app/lib/helper";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../lib/auth";
import LogoutButton from "./LogoutButton";

export default async function AdminDashboard() {
    const isAuthed = await isAdminAuthenticated();

    if (!isAuthed) {
        redirect("/admin/login");
    }

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1
                        className="text-4xl font-extrabold"
                        style={{ color: colors.black }}
                    >
                        Admin Dashboard
                    </h1>
                    <p className="mt-1 text-lg" style={{ color: colors.gray }}>
                        Manage NSBE content and site data
                    </p>
                </div>

                <LogoutButton />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Events */}
                <DashboardCard
                    href="/admin/events"
                    icon={<Calendar className="text-white" />}
                    iconBg={colors.primary}
                    title="Events"
                    description="Create, edit, and manage events"
                    accent={colors.primary}
                />

                {/* Execs */}
                <DashboardCard
                    href="/admin/execs"
                    icon={<Users className="text-black" />}
                    iconBg={colors.yellow}
                    title="Execs"
                    description="Manage executive team profiles"
                    accent={colors.black}
                />

                {/* Sponsors */}
                <DashboardCard
                    href="/admin/sponsors"
                    icon={<Handshake className="text-white" />}
                    iconBg={colors.red}
                    title="Sponsors"
                    description="View and update sponsors"
                    accent={colors.red}
                />
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* Reusable Dashboard Card Component  */
/* ---------------------------------- */

function DashboardCard({
    href,
    icon,
    iconBg,
    title,
    description,
    accent,
}: {
    href: string;
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    description: string;
    accent: string;
}) {
    return (
        <Link
            href={href}
            className="group rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ borderColor: colors.gray }}
        >
            <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: iconBg }}
            >
                {icon}
            </div>

            <h2
                className="text-xl font-bold mb-1"
                style={{ color: colors.black }}
            >
                {title}
            </h2>

            <p className="text-sm" style={{ color: colors.gray }}>
                {description}
            </p>

            <span
                className="inline-block mt-5 font-semibold transition-all group-hover:translate-x-1"
                style={{ color: accent }}
            >
                Manage →
            </span>
        </Link>
    );
}
