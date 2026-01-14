import Link from "next/link";
import { Calendar, Users, Handshake } from "lucide-react";
import { colors } from "@/app/lib/helper";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../lib/auth";

export default async function AdminDashboard() {
    const isAuthed = await isAdminAuthenticated();

    if (!isAuthed) {
        redirect("/admin/login");
    }
    return (
        <div>
            <h1
                className="text-4xl font-extrabold mb-2"
                style={{ color: colors.black }}
            >
                Admin Dashboard
            </h1>
            <p className="mb-8" style={{ color: colors.gray }}>
                Manage NSBE content and site data
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Events */}
                <Link
                    href="/admin/events"
                    className="group rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ borderColor: colors.gray }}
                >
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: colors.primary }}
                    >
                        <Calendar className="text-white" />
                    </div>

                    <h2
                        className="text-xl font-bold mb-1"
                        style={{ color: colors.black }}
                    >
                        See Events
                    </h2>

                    <p style={{ color: colors.gray }}>
                        Create, edit, and manage events
                    </p>

                    <span
                        className="inline-block mt-4 font-semibold"
                        style={{ color: colors.primary }}
                    >
                        Manage →
                    </span>
                </Link>

                {/* Execs */}
                <Link
                    href="/admin/execs"
                    className="group rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ borderColor: colors.gray }}
                >
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: colors.yellow }}
                    >
                        <Users className="text-black" />
                    </div>

                    <h2
                        className="text-xl font-bold mb-1"
                        style={{ color: colors.black }}
                    >
                        See Execs
                    </h2>

                    <p style={{ color: colors.gray }}>
                        Manage executive team profiles
                    </p>

                    <span
                        className="inline-block mt-4 font-semibold"
                        style={{ color: colors.black }}
                    >
                        Manage →
                    </span>
                </Link>

                {/* Sponsors */}
                <Link
                    href="/admin/sponsors"
                    className="group rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ borderColor: colors.gray }}
                >
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: colors.red }}
                    >
                        <Handshake className="text-white" />
                    </div>

                    <h2
                        className="text-xl font-bold mb-1"
                        style={{ color: colors.black }}
                    >
                        See Sponsors
                    </h2>

                    <p style={{ color: colors.gray }}>
                        View and update sponsors
                    </p>

                    <span
                        className="inline-block mt-4 font-semibold"
                        style={{ color: colors.red }}
                    >
                        Manage →
                    </span>
                </Link>
            </div>
        </div>
    );
}
