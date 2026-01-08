"use client";

import { useState, useEffect } from "react";
import { colors } from "../lib/helper";

interface HeroImage {
    id: number;
    url: string;
    alt: string;
}

interface HeroSectionProps {
    images: HeroImage[];
}

export default function HeroSection({ images }: HeroSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="w-screen min-h-screen bg-cover bg-center transition-all duration-1000 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${images[currentIndex].url})`,
            }}
        >
            {/* Fluid Animation Accent */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{ backgroundColor: colors.yellow }}
                />
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
                    style={{
                        backgroundColor: colors.red,
                        animationDelay: "1s",
                    }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-screen max-w-7xl mx-auto text-center px-4">
                <h1
                    className="text-3xl sm:text-5xl md:text-7xl font-extrabold drop-shadow-2xl"
                    style={{
                        color: colors.primary,
                        fontFamily: "impact",
                        textShadow: `3px 3px 6px ${colors.black}`,
                    }}
                >
                    NATIONAL SOCIETY OF BLACK ENGINEERS
                </h1>
                <h2
                    className="text-2xl sm:text-4xl md:text-5xl mt-4 font-extrabold"
                    style={{
                        color: colors.red,
                        fontFamily: "impact",
                        textShadow: `2px 2px 4px ${colors.black}`,
                    }}
                >
                    UCALGARY CHAPTER
                </h2>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                    <button
                        className="px-8 py-3 rounded-lg text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                        style={{
                            backgroundColor: colors.primary,
                            color: "white",
                        }}
                        onClick={() =>
                            window.open(
                                "https://docs.google.com/forms/d/e/1FAIpQLSeSIWUdDBW1eiZWvzlO4IjsIxml8AEl5dLUCbxTwGs0YZD7pw/viewform",
                                "_blank"
                            )
                        }
                    >
                        <i className="fas fa-users mr-2" />
                        Become A Member
                    </button>
                    <button
                        className="px-8 py-3 rounded-lg text-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                        style={{
                            backgroundColor: colors.yellow,
                            color: colors.black,
                        }}
                        onClick={() => (window.location.href = "/get-involved")}
                    >
                        <i className="fas fa-handshake mr-2" />
                        Become A Sponsor
                    </button>
                </div>
            </div>
        </div>
    );
}
