"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { colors } from "@/app/lib/helper";

const carousel = [
    "/get-involved/carousel/gi01.jpg",
    "/get-involved/carousel/gi3.jpg",
    "/get-involved/carousel/gi4.jpg",
];

const infoData = [
    {
        header: "Academic Excellence Programs",
        info: [
            "Mentorship Program",
            "Study Nights & Workshops",
            "Fall Regional Conference",
            "Annual NSBE Convention",
        ],
    },
    {
        header: "High School Outreach Programs",
        info: ["Brain Stem Alliance", "While She is True"],
    },
    {
        header: "Professional Development Programs",
        info: ["Career Fair", "Professional Development Workshops"],
    },
];

const sponsorBenefits = [
    {
        header: "Champion Diversity & Inclusion",
        description:
            "By sponsoring our chapter, you demonstrate your commitment to diversity and inclusion in STEM fields. This not only supports a more equitable workforce but also drives innovation and creativity within your organization.",
    },
    {
        header: "Access to Top Talent",
        description:
            "As a sponsor, you gain direct access to a pool of over 100+ of some of the brightest and most ambitious graduate and undergraduate students in the engineering, technology, science and math fields.",
    },
    {
        header: "Support a Prestigious Organization",
        description:
            "Partnering with NSBE, a well-respected and established organization, and support innovative programs and initiatives that aligns your brand with excellence in engineering and technology.",
    },
];

const sponsorLevels = [
    {
        tier: "PLATINUM",
        color: "#E5E4E2",
        description: [
            "Logo placement on our official website",
            "Company logo on banners and merchandise",
            "Unlimited promotional efforts on social media, newsletter and our official website",
            "4 Representatives invited to prestigious Black Legacy Dinner",
        ],
        price: "$5000",
    },
    {
        tier: "GOLD",
        color: "#FFD700",
        description: [
            "Logo placement on the official website",
            "Company logo on banners and merchandise",
            "3 promotional efforts on social media, newsletter and our official website",
            "3 Representatives invited to prestigious Black Legacy Dinner",
        ],
        price: "$2500",
    },
    {
        tier: "SILVER",
        color: "#C0C0C0",
        description: [
            "Logo placement on our official website",
            "2 promotional efforts on social media, newsletter and our official website",
            "2 Representatives invited to prestigious Black Legacy Dinner",
        ],
        price: "$1000",
    },
    {
        tier: "BRONZE",
        color: "#CD7F32",
        description: [
            "Logo placement on our official website",
            "Promotional effort on social media, newsletter and our official website",
            "1 representative invited to Black Legacy Dinner",
        ],
        price: "$750",
    },
];

export default function GetInvolvedClient() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === carousel.length - 1 ? 0 : prev + 1
            );
        }, 8000);

        return () => clearInterval(interval);
    }, []);

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
                        GET INVOLVED
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: colors.yellow,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Join our mission. Build community. Create impact.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">
                {/* Join Section */}
                <div
                    className="grid lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-8 border-2"
                    style={{ borderColor: colors.gray }}
                >
                    <div className="relative w-full h-80 lg:h-auto rounded-xl overflow-hidden">
                        <Image
                            src="/get-involved/getInv.png"
                            alt="Join NSBE"
                            fill
                            className="object-fit"
                            priority
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2
                            className="text-3xl md:text-4xl font-extrabold mb-4"
                            style={{
                                fontFamily: "impact, sans-serif",
                                color: colors.black,
                            }}
                        >
                            JOIN OUR VIBRANT COMMUNITY
                        </h2>
                        <p
                            className="mb-6 text-base leading-relaxed"
                            style={{
                                fontFamily: "nunito, sans-serif",
                                color: colors.black,
                            }}
                        >
                            Become a part of an exciting and inclusive community
                            of like-minded individuals. Our club offers
                            opportunities for personal growth, professional
                            networking, and meaningful contributions to
                            impactful initiatives. Let&apos;s build something amazing
                            together!
                        </p>
                        <a
                            href="https://forms.gle/wFPS8msiqjRWS2dJ6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                            style={{
                                backgroundColor: colors.primary,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Become a Member
                        </a>
                    </div>
                </div>

                {/* Opportunities */}
                <div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                        style={{
                            fontFamily: "impact, sans-serif",
                            color: colors.black,
                        }}
                    >
                        OPPORTUNITIES
                    </h2>
                    <div
                        className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                        style={{ backgroundColor: colors.primary }}
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        {infoData.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
                                style={{ borderColor: colors.gray }}
                            >
                                <div
                                    className="w-12 h-1.5 mb-4 rounded-full"
                                    style={{
                                        backgroundColor: colors.yellow,
                                    }}
                                />
                                <h3
                                    className="font-bold text-xl mb-4"
                                    style={{
                                        fontFamily: "nunito, sans-serif",
                                        color: colors.primary,
                                    }}
                                >
                                    {item.header}
                                </h3>
                                <ul
                                    className="list-disc ml-5 space-y-1"
                                    style={{
                                        fontFamily: "nunito, sans-serif",
                                        color: colors.black,
                                    }}
                                >
                                    {item.info.map((i, k) => (
                                        <li key={k}>{i}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel */}
                <div
                    className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl shadow-2xl border-2"
                    style={{ borderColor: colors.primary }}
                >
                    <div
                        className="absolute inset-0 flex transition-transform duration-700"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {carousel.map((src, i) => (
                            <div
                                key={i}
                                className="relative w-full h-full flex-shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt={`Get involved ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 75vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Carousel Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {carousel.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className="w-3 h-3 rounded-full transition-all duration-300"
                                style={{
                                    backgroundColor:
                                        i === currentIndex
                                            ? colors.yellow
                                            : colors.gray,
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Volunteer */}
                <div
                    className="grid lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-8 border-2"
                    style={{ borderColor: colors.gray }}
                >
                    <div className="flex flex-col justify-center lg:order-1">
                        <h2
                            className="text-3xl md:text-4xl font-extrabold mb-4"
                            style={{
                                fontFamily: "impact, sans-serif",
                                color: colors.black,
                            }}
                        >
                            VOLUNTEER
                        </h2>
                        <p
                            className="mb-6 text-base leading-relaxed"
                            style={{
                                fontFamily: "nunito, sans-serif",
                                color: colors.black,
                            }}
                        >
                            Make a difference by volunteering your time and
                            skills with our club. Help us organize impactful
                            events, mentor aspiring professionals, and
                            contribute to community initiatives. Volunteering is
                            a great way to give back, build leadership skills,
                            and connect with passionate individuals. Together,
                            we can create meaningful change and grow both
                            personally and professionally!
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfoQQ6El6F-AC4kXBO4qUR3lOph7UY1aDiuVH-aRndC9d3kKA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                            style={{
                                backgroundColor: colors.yellow,
                                color: colors.black,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Volunteer With Us
                        </a>
                    </div>

                    <div className="relative w-full h-80 lg:h-auto rounded-xl overflow-hidden lg:order-2">
                        <Image
                            src="/get-involved/DSCN2082.png"
                            alt="Volunteer"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Sponsorship Benefits */}
                <div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                        style={{
                            fontFamily: "impact, sans-serif",
                            color: colors.black,
                        }}
                    >
                        SPONSORSHIP OPPORTUNITIES
                    </h2>
                    <div
                        className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                        style={{ backgroundColor: colors.primary }}
                    />

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {sponsorBenefits.map((b, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
                                style={{ borderColor: colors.gray }}
                            >
                                <h3
                                    className="font-bold text-xl mb-3"
                                    style={{
                                        fontFamily: "nunito, sans-serif",
                                        color: colors.primary,
                                    }}
                                >
                                    {b.header}
                                </h3>
                                <p
                                    className="text-base leading-relaxed"
                                    style={{
                                        fontFamily: "nunito, sans-serif",
                                        color: colors.black,
                                    }}
                                >
                                    {b.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sponsor Levels */}
                <div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12"
                        style={{
                            fontFamily: "impact, sans-serif",
                            color: colors.black,
                        }}
                    >
                        SPONSORSHIP LEVELS
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sponsorLevels.map((level, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            >
                                <div
                                    className="w-full h-2"
                                    style={{
                                        backgroundColor: level.color,
                                    }}
                                />
                                <div className="p-6 text-center">
                                    <h3
                                        className="font-bold text-2xl mb-2"
                                        style={{
                                            fontFamily: "impact, sans-serif",
                                            color: colors.black,
                                        }}
                                    >
                                        {level.tier}
                                    </h3>
                                    <p
                                        className="text-3xl font-extrabold mb-4"
                                        style={{
                                            fontFamily: "impact, sans-serif",
                                            color: colors.primary,
                                        }}
                                    >
                                        {level.price}
                                    </p>
                                    <ul
                                        className="text-left text-sm space-y-2"
                                        style={{
                                            fontFamily: "nunito, sans-serif",
                                            color: colors.black,
                                        }}
                                    >
                                        {level.description.map((desc, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start"
                                            >
                                                <span
                                                    className="mr-2 mt-1 flex-shrink-0"
                                                    style={{
                                                        color: colors.primary,
                                                    }}
                                                >
                                                    •
                                                </span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center mt-12">
                        <p
                            className="text-lg mb-6"
                            style={{
                                fontFamily: "nunito, sans-serif",
                                color: colors.black,
                            }}
                        >
                            Interested in becoming a sponsor? Let&apos;s connect!
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                                backgroundColor: colors.primary,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Contact Us Today
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
