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
} from "lucide-react";

const colors = {
    primary: "#00843D",
    secondary: "#FFC72C",
    yellow: "#FFC72C",
    red: "#E4002B",
    black: "#000000",
    gray: "#D3D3D3",
};

export default function SponsorsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sponsorTiers = [
        {
            name: "Platinum",
            color: "#E5E4E2",
            benefits: [
                "Logo on all event materials",
                "Featured company presentation",
                "Exclusive networking session",
                "Premium booth space",
            ],
        },
        {
            name: "Gold",
            color: "#FFD700",
            benefits: [
                "Logo on select event materials",
                "Company presentation opportunity",
                "Networking session access",
                "Standard booth space",
            ],
        },
        {
            name: "Silver",
            color: "#C0C0C0",
            benefits: [
                "Logo on website",
                "Social media recognition",
                "Networking access",
                "Booth space",
            ],
        },
        {
            name: "Bronze",
            color: "#CD7F32",
            benefits: [
                "Logo on website",
                "Social media recognition",
                "Event access",
            ],
        },
    ];

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
                        BECOME A SPONSOR
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: colors.yellow,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Partner with NSBE UCalgary to support the next
                        generation of Black engineers and innovators.
                    </p>
                </div>
            </section>

            {/* Why Sponsor Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                    style={{
                        fontFamily: "impact, sans-serif",
                        color: colors.black,
                    }}
                >
                    WHY SPONSOR US?
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Users,
                            title: "Diverse Talent",
                            description:
                                "Connect with talented Black engineering students",
                        },
                        {
                            icon: Handshake,
                            title: "Networking",
                            description:
                                "Build meaningful relationships with future leaders",
                        },
                        {
                            icon: Trophy,
                            title: "Brand Visibility",
                            description:
                                "Increase your company's visibility on campus",
                        },
                        {
                            icon: Building2,
                            title: "Community Impact",
                            description:
                                "Support diversity and inclusion in engineering",
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
            </section>

            {/* Sponsorship Tiers */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                    style={{
                        fontFamily: "impact, sans-serif",
                        color: colors.black,
                    }}
                >
                    SPONSORSHIP TIERS
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sponsorTiers.map((tier, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
                            style={{ borderColor: colors.gray }}
                        >
                            <div
                                className="h-32 flex items-center justify-center"
                                style={{ backgroundColor: tier.color }}
                            >
                                <h3
                                    className="text-3xl font-extrabold"
                                    style={{
                                        color: colors.black,
                                        fontFamily: "impact, sans-serif",
                                    }}
                                >
                                    {tier.name}
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    {tier.benefits.map((benefit, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2"
                                            style={{
                                                fontFamily:
                                                    "nunito, sans-serif",
                                            }}
                                        >
                                            <span
                                                className="text-xl"
                                                style={{
                                                    color: colors.primary,
                                                }}
                                            >
                                                ✓
                                            </span>
                                            <span
                                                style={{ color: colors.black }}
                                            >
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
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
                        READY TO MAKE AN IMPACT?
                    </h2>
                    <p
                        className="text-lg mb-8"
                        style={{
                            color: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Download our sponsorship package to learn more about
                        partnership opportunities.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg"
                        style={{
                            backgroundColor: colors.primary,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Get Sponsorship Package
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
                                SPONSORSHIP PACKAGE
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
                                    📋 How to Become a Sponsor:
                                </h4>
                                <ol
                                    className="space-y-2 ml-4"
                                    style={{ color: colors.black }}
                                >
                                    <li>
                                        1. Download the sponsorship package PDF
                                        below
                                    </li>
                                    <li>
                                        2. Review the sponsorship tiers and
                                        benefits
                                    </li>
                                    <li>
                                        3. Complete the sponsorship form
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
                                href="/path-to-your-sponsorship-package.pdf"
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
