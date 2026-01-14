"use client";

import { useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    Mail,
    Link as LinkIcon,
    User,
    LogOut,
    ArrowLeft,
} from "lucide-react";
import { colors } from "@/app/lib/helper";
import { Exec } from "@/app/lib/type";
import AddExecModal from "./AddExecModal";
import EditExecModal from "./EditExecModal";
import DeleteExecModal from "./DeleteExecModal";
import Link from "next/link";

export default function AdminExecPage({ execs }: { execs: Exec[] }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingExec, setEditingExec] = useState<Exec | null>(null);
    const [deleteExec, setDeleteExec] = useState<Exec | null>(null);

    // Group members by hierarchy (0=President, 1=VP, 2=Coordinator)
    const presidents = execs.filter((e) => e.exec_position === 0);
    const vicePresidents = execs.filter((e) => e.exec_position === 1);
    const coordinators = execs.filter((e) => e.exec_position === 2);

    const ExecCard = ({ exec }: { exec: Exec }) => (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:-translate-y-2">
            {/* Exec Image */}
            <div className="relative w-full h-64 bg-gray-200">
                {exec.exec_picture ? (
                    <img
                        src={exec.exec_picture}
                        alt={`${exec.fname} ${exec.lname}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center text-6xl font-bold"
                        style={{ color: colors.primary }}
                    >
                        {exec.fname.charAt(0)}
                        {exec.lname.charAt(0)}
                    </div>
                )}

                {/* Action Buttons Overlay */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => setEditingExec(exec)}
                        className="p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Edit exec"
                    >
                        <Pencil size={18} style={{ color: colors.primary }} />
                    </button>
                    <button
                        onClick={() => setDeleteExec(exec)}
                        className="p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Delete exec"
                    >
                        <Trash2 size={18} style={{ color: colors.red }} />
                    </button>
                </div>
            </div>

            {/* Exec Details */}
            <div className="p-6" style={{ backgroundColor: colors.black }}>
                <h3
                    className="text-xl font-bold mb-1"
                    style={{
                        color: colors.primary,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {exec.fname} {exec.lname}
                </h3>
                <p
                    className="text-sm mb-3"
                    style={{
                        color: colors.yellow,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {exec.exec_role}
                </p>

                {/* Bio */}
                {exec.exec_bio && (
                    <p
                        className="text-sm leading-relaxed mb-3 text-white line-clamp-3"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        {exec.exec_bio}
                    </p>
                )}

                {/* Contact Info */}
                <div className="space-y-2 pt-3 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-sm">
                        <Mail
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        <span
                            className="text-white text-xs break-all"
                            style={{ fontFamily: "nunito, sans-serif" }}
                        >
                            {exec.exec_email}
                        </span>
                    </div>

                    {exec.exec_link && (
                        <div className="flex items-center gap-2 text-sm">
                            <LinkIcon
                                className="w-4 h-4"
                                style={{ color: colors.primary }}
                            />
                            <a
                                href={exec.exec_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold hover:underline"
                                style={{
                                    color: colors.primary,
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                Profile Link
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1
                    className="text-4xl font-extrabold"
                    style={{
                        color: colors.black,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    Manage Execs
                </h1>

                <div className="flex items-center gap-3">
                    <Link
                        href="/admin"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl text-black font-bold hover:scale-105 transition bg-gray-300 hover:bg-gray-300"
                        style={{
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        <ArrowLeft size={20} /> Back to Admin
                    </Link>

                    <button
                        onClick={async () => {
                            console.log("Signout clicked")
                        }}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:scale-105 transition text-white"
                        style={{
                            backgroundColor: colors.red,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        <LogOut size={20} /> Logout
                    </button>

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:scale-105 transition text-white"
                        style={{
                            backgroundColor: colors.primary,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        <Plus size={20} /> Add Exec
                    </button>
                </div>
            </div>

            {/* Exec Cards - Grouped by Hierarchy */}
            <div className="space-y-12">
                {/* Presidents Section */}
                {presidents.length > 0 && (
                    <div>
                        <h2
                            className="text-2xl font-bold mb-6"
                            style={{
                                color: colors.black,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            PRESIDENTS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {presidents.map((exec) => (
                                <ExecCard key={exec.exec_id} exec={exec} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Vice Presidents Section */}
                {vicePresidents.length > 0 && (
                    <div>
                        <h2
                            className="text-2xl font-bold mb-6"
                            style={{
                                color: colors.black,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            VICE PRESIDENTS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vicePresidents.map((exec) => (
                                <ExecCard key={exec.exec_id} exec={exec} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Coordinators Section */}
                {coordinators.length > 0 && (
                    <div>
                        <h2
                            className="text-2xl font-bold mb-6"
                            style={{
                                color: colors.black,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            COORDINATORS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coordinators.map((exec) => (
                                <ExecCard key={exec.exec_id} exec={exec} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {execs.length === 0 && (
                    <div className="text-center py-20">
                        <User
                            className="w-24 h-24 mx-auto mb-4"
                            style={{ color: colors.gray }}
                        />
                        <h3
                            className="text-2xl font-bold mb-2"
                            style={{
                                color: colors.black,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            No Executives Yet
                        </h3>
                        <p
                            className="text-lg mb-6"
                            style={{
                                color: colors.gray,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Click the &quot;Add Exec&quot; button to get started
                        </p>
                    </div>
                )}
            </div>

            {/* Modals */}
            {showAddModal && (
                <AddExecModal onCloseAction={() => setShowAddModal(false)} />
            )}

            {editingExec && (
                <EditExecModal
                    exec={editingExec}
                    onCloseAction={() => setEditingExec(null)}
                />
            )}

            {deleteExec && (
                <DeleteExecModal
                    exec={deleteExec}
                    onClose={() => setDeleteExec(null)}
                />
            )}
        </div>
    );
}
