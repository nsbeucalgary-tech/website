"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Mail, X } from "lucide-react";
import { colors } from "@/app/lib/helper";
import { Exec } from "@/app/lib/type";

interface TeamClientProps {
    execs: Exec[];
}

export default function TeamClient({ execs }: TeamClientProps) {
    const [activeMember, setActiveMember] = useState<Exec | null>(null);

    // Group members by hierarchy
    const presidents = execs.filter((e) => Number(e.exec_position) === 0);
    const vicePresidents = execs.filter((e) => Number(e.exec_position) === 1);
    const coordinators = execs.filter((e) => Number(e.exec_position) === 2);


    const handleMemberClick = (member: Exec) => {
        setActiveMember(member);
    };

    const closeModal = () => {
        setActiveMember(null);
    };

    const MemberCard = ({ member }: { member: Exec }) => (
        <div
            onClick={() => handleMemberClick(member)}
            className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
        >
            <div className="relative overflow-hidden rounded-t-2xl shadow-lg">
                <div className="relative w-full h-80 bg-gray-200">
                    {member.exec_picture ? (
                        <Image
                            src={member.exec_picture}
                            alt={`${member.fname} ${member.lname}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    ) : (
                        <div
                            className="w-full h-full flex items-center justify-center text-6xl font-bold"
                            style={{ color: colors.primary }}
                        >
                            {member.fname.charAt(0)}
                            {member.lname.charAt(0)}
                        </div>
                    )}
                </div>
            </div>
            <div
                className="rounded-b-2xl p-4 text-center shadow-lg"
                style={{ backgroundColor: colors.black }}
            >
                <h3
                    className="text-lg font-bold mb-1"
                    style={{
                        color: colors.primary,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {member.fname} {member.lname}
                </h3>
                <p
                    className="text-sm"
                    style={{
                        color: colors.yellow,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {member.exec_role}
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#f9f9f9" }}>
            {/* Hero Section */}
            <section
                className="relative py-20"
                style={{
                    background: `linear-gradient(135deg, ${colors.black} 0%, ${colors.primary} 100%)`,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
                        style={{
                            color: "white",
                            fontFamily: "impact, sans-serif",
                            textShadow: `3px 3px 6px ${colors.black}`,
                        }}
                    >
                        OUR TEAM
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: colors.yellow,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Meet the dedicated leaders driving NSBE UCalgary forward
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Year Badge */}
                <div className="text-center mb-16">
                    <div
                        className="inline-block px-8 py-3 rounded-full font-bold text-xl"
                        style={{
                            backgroundColor: colors.primary,
                            color: "white",
                            fontFamily: "impact, sans-serif",
                        }}
                    >
                        2025 - 2026
                    </div>
                </div>

                {/* Presidents Section */}
                {presidents.length > 0 && (
                    <div className="mb-16">
                        <h2
                            className="text-3xl font-bold text-center mb-8"
                            style={{
                                color: colors.black,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            PRESIDENT
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {presidents.map((member) => (
                                <MemberCard
                                    key={member.exec_ucid}
                                    member={member}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Vice Presidents Section */}
                {vicePresidents.length > 0 && (
                    <div className="mb-16">
                        <h2
                            className="text-3xl font-bold text-center mb-8"
                            style={{
                                color: colors.black,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            VICE PRESIDENTS
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {vicePresidents.map((member) => (
                                <MemberCard
                                    key={member.exec_ucid}
                                    member={member}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Coordinators Section */}
                {coordinators.length > 0 && (
                    <div className="mb-16">
                        <h2
                            className="text-3xl font-bold text-center mb-8"
                            style={{
                                color: colors.black,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            COORDINATORS
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {coordinators.map((member) => (
                                <MemberCard
                                    key={member.exec_ucid}
                                    member={member}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            {activeMember && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-70 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden"
                        style={{ backgroundColor: "white" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <X
                                className="w-6 h-6"
                                style={{
                                    color: colors.red,
                                }}
                            />
                        </button>

                        {/* Modal Content */}
                        <div className="grid md:grid-cols-2 gap-0 bg-black">
                            {/* Image Section */}
                            <div className="relative h-96 md:h-auto bg-gray-200">
                                {activeMember.exec_picture ? (
                                    <Image
                                        src={activeMember.exec_picture}
                                        alt={`${activeMember.fname} ${activeMember.lname}`}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div
                                        className="w-full h-full flex items-center justify-center text-9xl font-bold"
                                        style={{ color: colors.primary }}
                                    >
                                        {activeMember.fname.charAt(0)}
                                        {activeMember.lname.charAt(0)}
                                    </div>
                                )}
                            </div>

                            {/* Info Section */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3
                                    className="text-3xl font-bold mb-2"
                                    style={{
                                        color: colors.primary,
                                        fontFamily: "impact, sans-serif",
                                    }}
                                >
                                    {activeMember.fname} {activeMember.lname}
                                </h3>
                                <p
                                    className="text-xl mb-4"
                                    style={{
                                        color: colors.yellow,
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    {activeMember.exec_role}
                                </p>

                                {activeMember.exec_bio && (
                                    <p
                                        className="text-base leading-relaxed mb-6 text-white"
                                        style={{
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        {activeMember.exec_bio}
                                    </p>
                                )}

                                {/* Contact Icons */}
                                <div className="flex gap-4">
                                    {activeMember.exec_email && (
                                        <a
                                            href={`mailto:${activeMember.exec_email}`}
                                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                            style={{
                                                backgroundColor: colors.red,
                                            }}
                                            aria-label={`Email ${activeMember.fname}`}
                                        >
                                            <Mail className="w-6 h-6 text-white" />
                                        </a>
                                    )}
                                    {activeMember.exec_link && (
                                        <a
                                            href={activeMember.exec_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                            style={{
                                                backgroundColor: "#0e76a8",
                                            }}
                                            aria-label={`${activeMember.fname}'s LinkedIn`}
                                        >
                                            <Linkedin className="w-6 h-6 text-white" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
