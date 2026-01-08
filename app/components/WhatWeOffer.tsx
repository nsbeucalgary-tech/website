import Image from "next/image";
import { colors } from "../lib/helper";

interface OfferItem {
    title: string;
    description: string;
    icon: string;
}

interface WhatWeOfferProps {
    items: OfferItem[];
}

export default function WhatWeOffer({ items }: WhatWeOfferProps) {
    return (
        <div
            className="w-screen min-h-screen py-16"
            style={{ backgroundColor: "#f9f9f9" }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    className="text-4xl sm:text-6xl font-extrabold text-center mb-4"
                    style={{
                        color: colors.black,
                        fontFamily: "impact",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                    }}
                >
                    WHAT WE OFFER
                </h2>
                <div
                    className="w-24 h-1 mx-auto mb-12"
                    style={{ backgroundColor: colors.primary }}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            style={{ border: `3px solid ${colors.gray}` }}
                        >
                            <div
                                className="w-48 h-48 mx-auto mb-6 overflow-hidden relative"
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className={`object-cover ${index !== 1 ? "p-6" : ""}`}
                                    priority={index === 0}
                                />
                            </div>
                            <h3
                                className="text-2xl font-bold mb-4 text-center"
                                style={{
                                    color: colors.primary,
                                    fontFamily: "nunito",
                                }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-base leading-relaxed text-center"
                                style={{
                                    color: colors.black,
                                    fontFamily: "nunito",
                                }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
