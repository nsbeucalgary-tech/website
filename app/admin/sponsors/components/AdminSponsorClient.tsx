"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Building2, Star, ArrowLeft, LogOut } from "lucide-react";
import { colors } from "@/app/lib/helper";
import { Sponsor } from "@/app/lib/type";
import AddSponsorModal from "./AddSponsorModal";
import EditSponsorModal from "./EditSponsorModal";
import DeleteSponsorModal from "./DeleteSponsorModal";
import AdminSponsorTier from "./AdminSponsorTier";
import Link from "next/link";

export default function AdminSponsorClient({
    sponsors,
}: {
    sponsors: Sponsor[];
}) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingSponsor, setEditingSponsor] = useState<Sponsor | null>(null);
    const [deleteSponsor, setDeleteSponsor] = useState<Sponsor | null>(null);

    // Group sponsors by status (0=Platinum, 1=Gold, 2=Silver, 3=Bronze)
    const platinum = sponsors.filter((s) => s.company_status === 0);
    const gold = sponsors.filter((s) => s.company_status === 1);
    const silver = sponsors.filter((s) => s.company_status === 2);
    const bronze = sponsors.filter((s) => s.company_status === 3);

    const getStatusColor = (status: number) => {
        switch (status) {
            case 0:
                return "#e5e7eb"; // Platinum
            case 1:
                return colors.yellow; // Gold
            case 2:
                return "#9ca3af"; // Silver
            case 3:
                return "#cd7f32"; // Bronze
            default:
                return colors.gray;
        }
    };

    const getStatusName = (status: number) => {
        switch (status) {
            case 0:
                return "Platinum";
            case 1:
                return "Gold";
            case 2:
                return "Silver";
            case 3:
                return "Bronze";
            default:
                return "Unknown";
        }
    };

    const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:-translate-y-2">
            {/* Sponsor Logo */}
            <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center p-6">
                {sponsor.company_logo ? (
                    <img
                        src={sponsor.company_logo}
                        alt={sponsor.company_name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ color: colors.gray }}
                    >
                        <Building2 className="w-20 h-20" />
                    </div>
                )}

                {/* Action Buttons Overlay */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => setEditingSponsor(sponsor)}
                        className="p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Edit sponsor"
                    >
                        <Pencil size={18} style={{ color: colors.primary }} />
                    </button>
                    <button
                        onClick={() => setDeleteSponsor(sponsor)}
                        className="p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Delete sponsor"
                    >
                        <Trash2 size={18} style={{ color: colors.red }} />
                    </button>
                </div>

                {/* Status Badge */}
                <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1"
                    style={{
                        backgroundColor: getStatusColor(sponsor.company_status),
                    }}
                >
                    <Star className="w-3 h-3" fill="white" />
                    {getStatusName(sponsor.company_status)}
                </div>
            </div>

            {/* Sponsor Details */}
            <div className="p-6" style={{ backgroundColor: colors.black }}>
                <h3
                    className="text-lg font-bold text-center"
                    style={{
                        color: colors.primary,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {sponsor.company_name}
                </h3>
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
                    Manage Sponsors
                </h1>

                <div className="flex items-center gap-3">
                    <Link
                        href="/admin"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl text-black font-bold hover:scale-105 transition bg-gray-200 hover:bg-gray-300"
                        style={{
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        <ArrowLeft size={20} /> Back to Admin
                    </Link>

                    <button
                        onClick={async () => {
                            console.log("Signout clicked");
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
                        <Plus size={20} /> Add Sponsor
                    </button>
                </div>
            </div>

            {/* Sponsor Cards - Grouped by Status */}
            <div className="space-y-12">
                <AdminSponsorTier
                    title="PLATINUM SPONSORS"
                    sponsors={platinum}
                    color="#e5e7eb"
                    SponsorCard={SponsorCard}
                />
                <AdminSponsorTier
                    title="GOLD SPONSORS"
                    sponsors={gold}
                    color={colors.yellow}
                    SponsorCard={SponsorCard}
                />
                <AdminSponsorTier
                    title="SILVER SPONSORS"
                    sponsors={silver}
                    color="#9ca3af"
                    SponsorCard={SponsorCard}
                />
                <AdminSponsorTier
                    title="BRONZE SPONSORS"
                    sponsors={bronze}
                    color="#cd7f32"
                    SponsorCard={SponsorCard}
                />

                {/* Empty State */}
                {sponsors.length === 0 && (
                    <div className="text-center py-20">
                        <Building2
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
                            No Sponsors Yet
                        </h3>
                        <p
                            className="text-lg mb-6"
                            style={{
                                color: colors.gray,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Click the &quot;Add Sponsor&quot; button to get
                            started
                        </p>
                    </div>
                )}
            </div>

            {/* Modals */}
            {showAddModal && (
                <AddSponsorModal onCloseAction={() => setShowAddModal(false)} />
            )}

            {editingSponsor && (
                <EditSponsorModal
                    sponsor={editingSponsor}
                    onCloseAction={() => setEditingSponsor(null)}
                />
            )}

            {deleteSponsor && (
                <DeleteSponsorModal
                    sponsor={deleteSponsor}
                    onClose={() => setDeleteSponsor(null)}
                />
            )}
        </div>
    );
}
