"use client";

import { useState } from "react";
import {
    X,
    Download,
    Mail,
    Building2,
    Handshake,
    Users,
    Trophy,
    ExternalLink,
} from "lucide-react";
import { Sponsor } from "@/app/lib/type";
import Image from "next/image";

const colors = {
    primary: "#00843D",
    secondary: "#FFC72C",
    yellow: "#FFC72C",
    red: "#E4002B",
    black: "#000000",
    gray: "#D3D3D3",
};

export default function AcademicSponsorsPage({ sponsors }: { sponsors : Sponsor[]}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        ACADEMIC SPONSORS
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: colors.yellow,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Thank you to our valued academic partners who support
                        NSBE UCalgary and empower Black engineering students to
                        excel.
                    </p>
                </div>
            </section>

            {/* Academic Sponsors Grid */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                    style={{
                        fontFamily: "impact, sans-serif",
                        color: colors.black,
                    }}
                >
                    OUR ACADEMIC PARTNERS
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sponsors.map((sponsor) => (
                        <a
                            key={sponsor.company_id}
                            href={sponsor.company_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer"
                            style={{ borderColor: colors.gray }}
                        >
                            {/* Circular Logo */}
                            <div className="relative w-40 h-40 mx-auto mb-6">
                                <div
                                    className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-105"
                                    style={{
                                        border: `4px solid ${colors.primary}`,
                                        background: `linear-gradient(135deg, ${colors.primary}15, ${colors.yellow}15)`,
                                    }}
                                />
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-4 flex items-center justify-center">
                                    {/* Placeholder for actual image */}
                                    {sponsor.company_logo ? (
                                        <Image
                                            src={sponsor.company_logo}
                                            alt={sponsor.company_name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full rounded-full flex items-center justify-center text-4xl font-bold"
                                            style={{
                                                backgroundColor: `${colors.primary}20`,
                                                color: colors.primary,
                                                fontFamily: "impact, sans-serif",
                                            }}
                                        >
                                            {sponsor.company_name
                                                .split(" ")
                                                .map((word) => word[0])
                                                .join("")
                                                .slice(0, 2)}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Company Name */}
                            <h3
                                className="text-xl font-bold text-center mb-6 group-hover:text-opacity-80 transition-all duration-300 min-h-[3.5rem] flex items-center justify-center"
                                style={{
                                    color: colors.black,
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                {sponsor.company_name}
                            </h3>

                            {/* Visit Website Button */}
                            <div
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: "white",
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                <span>Visit Website</span>
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Why Sponsor Section */}
            <section className="py-16" style={{ backgroundColor: "white" }}>
                <div className="max-w-7xl mx-auto px-4">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                        style={{
                            fontFamily: "impact, sans-serif",
                            color: colors.black,
                        }}
                    >
                        WHY PARTNER WITH US?
                    </h2>
                    <div
                        className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                        style={{ backgroundColor: colors.primary }}
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Student Success",
                                description:
                                    "Support the academic and professional development of Black engineering students",
                            },
                            {
                                icon: Handshake,
                                title: "Collaboration",
                                description:
                                    "Build meaningful partnerships that foster diversity in STEM education",
                            },
                            {
                                icon: Trophy,
                                title: "Recognition",
                                description:
                                    "Showcase your institution's commitment to equity and inclusion",
                            },
                            {
                                icon: Building2,
                                title: "Community Impact",
                                description:
                                    "Strengthen the engineering community through inclusive excellence",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
                                style={{ borderColor: colors.gray }}
                            >
                                <item.icon
                                    className="w-16 h-16 mx-auto mb-4"
                                    style={{ color: colors.primary }}
                                />
                                <h3
                                    className="text-xl font-bold mb-3 text-center"
                                    style={{
                                        color: colors.black,
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-center"
                                    style={{
                                        color: colors.black,
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16"
                style={{ backgroundColor: colors.black }}
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{
                            color: "white",
                            fontFamily: "impact, sans-serif",
                        }}
                    >
                        INTERESTED IN PARTNERING?
                    </h2>
                    <p
                        className="text-lg mb-8"
                        style={{
                            color: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Download our partnership package to learn more about
                        collaboration opportunities with NSBE UCalgary.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg"
                        style={{
                            backgroundColor: colors.primary,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Get Partnership Package
                    </button>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X
                                className="w-6 h-6"
                                style={{ color: colors.black }}
                            />
                        </button>

                        <div className="text-center mb-6">
                            <Download
                                className="w-20 h-20 mx-auto mb-4"
                                style={{ color: colors.primary }}
                            />
                            <h3
                                className="text-3xl font-extrabold mb-4"
                                style={{
                                    color: colors.black,
                                    fontFamily: "impact, sans-serif",
                                }}
                            >
                                PARTNERSHIP PACKAGE
                            </h3>
                        </div>

                        <div
                            className="space-y-4 mb-8"
                            style={{ fontFamily: "nunito, sans-serif" }}
                        >
                            <div
                                className="bg-green-50 border-2 rounded-lg p-6"
                                style={{ borderColor: colors.primary }}
                            >
                                <h4
                                    className="font-bold text-lg mb-2"
                                    style={{ color: colors.primary }}
                                >
                                    📋 How to Become an Academic Partner:
                                </h4>
                                <ol
                                    className="space-y-2 ml-4"
                                    style={{ color: colors.black }}
                                >
                                    <li>
                                        1. Download the partnership package PDF
                                        below
                                    </li>
                                    <li>
                                        2. Review the collaboration
                                        opportunities and benefits
                                    </li>
                                    <li>
                                        3. Complete the partnership form
                                        included in the package
                                    </li>
                                    <li>
                                        4. Send the completed form to our team
                                    </li>
                                </ol>
                            </div>

                            <div
                                className="bg-yellow-50 border-2 rounded-lg p-6"
                                style={{ borderColor: colors.yellow }}
                            >
                                <div className="flex items-start gap-3">
                                    <Mail
                                        className="w-6 h-6 mt-0.5 flex-shrink-0"
                                        style={{ color: colors.primary }}
                                    />
                                    <div>
                                        <h4
                                            className="font-bold mb-2"
                                            style={{ color: colors.black }}
                                        >
                                            Send completed forms to:
                                        </h4>
                                        <a
                                            href="mailto:nsbe@ucalgary.ca"
                                            className="font-bold hover:underline"
                                            style={{ color: colors.primary }}
                                        >
                                            nsbe@ucalgary.ca
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/path-to-your-partnership-package.pdf"
                                download
                                className="flex-1 px-6 py-4 rounded-lg font-bold text-white text-center transition-all duration-300 hover:scale-105 shadow-lg"
                                style={{
                                    backgroundColor: colors.primary,
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                Download PDF Package
                            </a>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 border-2"
                                style={{
                                    borderColor: colors.gray,
                                    color: colors.black,
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
