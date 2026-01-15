"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { colors } from "./lib/helper";
import Particles from "react-particles";
import { Container, Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import type { Event } from "./lib/type";

interface CatchUpPopupProps {
    events: Event[];
}

export default function CatchUpPopup({ events }: CatchUpPopupProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if popup has been shown in this session so it does not keep appearing when you reload
        const hasSeenPopup = sessionStorage.getItem("hasSeenCatchUpPopup");

        if (!hasSeenPopup) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Mark as seen for this session
        sessionStorage.setItem("hasSeenCatchUpPopup", "true");
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFireworksPreset(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );

    if (!isOpen) return null;

    // Get top 4 upcoming events
    const upcomingEvents = events
        .filter((event) => new Date(event.event_time) >= new Date())
        .sort(
            (a, b) =>
                new Date(a.event_time).getTime() -
                new Date(b.event_time).getTime()
        )
        .slice(0, 4);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            // onClick={handleClose}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    preset: "fireworks",
                    background: {
                        color: "transparent",
                    },
                    emitters: {
                        rate: {
                            delay: 0.1, // more frequent launches
                            quantity: 2,
                        },
                        life: {
                            duration: 0.1,
                            count: 0,
                        },
                    },
                    particles: {
                        size: {
                            value: { min: 2, max: 26 }, // bigger particles
                        },
                        move: {
                            speed: { min: 1, max: 30 }, // faster explosions
                        },
                    },
                }}
            />

            <div
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
                style={{ backgroundColor: "white" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 w-7 h-7 rounded-md flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: colors.red }}
                    aria-label="Close popup"
                >
                    <X className="w-6 h-6 text-white" />
                </button>

                {/* Header Section */}
                <div
                    className="relative py-12 px-8 text-center"
                    style={{
                        background: `linear-gradient(135deg, ${colors.black} 0%, ${colors.primary} 100%)`,
                    }}
                >
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
                            style={{ backgroundColor: colors.yellow }}
                        />
                        <div
                            className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl"
                            style={{ backgroundColor: colors.red }}
                        />
                    </div>

                    <div className="relative z-10">
                        <h2
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
                            style={{
                                color: "white",
                                fontFamily: "impact, sans-serif",
                                textShadow: `3px 3px 6px ${colors.black}`,
                            }}
                        >
                            HAPPY NEW YEAR!
                        </h2>
                        <p
                            className="text-lg sm:text-xl max-w-2xl mx-auto"
                            style={{
                                color: colors.yellow,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Welcome to the 2026 Academic Year with the National
                            Society of Black Engineers
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    {/* Intro Text */}
                    <div className="text-center mb-8">
                        <p
                            className="text-lg"
                            style={{
                                color: colors.black,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Here are the upcoming events and updates you should
                            be aware of
                        </p>
                    </div>

                    {/* Events Section */}
                    <div className="mb-6">
                        <h3
                            className="text-2xl font-bold mb-6 text-center"
                            style={{
                                color: colors.primary,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            UPCOMING EVENTS
                        </h3>

                        {upcomingEvents.length > 0 ? (
                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.event_id}
                                        className="bg-gray-50 rounded-xl p-4 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                        style={{ borderColor: colors.gray }}
                                    >
                                        <div className="flex gap-4">
                                            {/* Event Image/Icon */}
                                            <div
                                                className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden"
                                                style={{
                                                    backgroundColor:
                                                        colors.gray,
                                                }}
                                            >
                                                {event.event_poster ? (
                                                    <Image
                                                        src={event.event_poster}
                                                        alt={event.event_name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div
                                                        className="w-full h-full flex items-center justify-center"
                                                        style={{
                                                            color: colors.primary,
                                                        }}
                                                    >
                                                        <Calendar className="w-10 h-10" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Event Details */}
                                            <div className="flex-1 min-w-0">
                                                <h4
                                                    className="font-bold text-sm mb-2 line-clamp-2"
                                                    style={{
                                                        color: colors.primary,
                                                        fontFamily:
                                                            "nunito, sans-serif",
                                                    }}
                                                >
                                                    {event.event_name}
                                                </h4>
                                                <div className="space-y-1">
                                                    <div className="flex items-start gap-1.5 text-xs">
                                                        <Clock
                                                            className="w-3 h-3 mt-0.5 flex-shrink-0"
                                                            style={{
                                                                color: colors.yellow,
                                                            }}
                                                        />
                                                        <span
                                                            className="line-clamp-1"
                                                            style={{
                                                                color: colors.black,
                                                                fontFamily:
                                                                    "nunito, sans-serif",
                                                            }}
                                                        >
                                                            {format(
                                                                new Date(
                                                                    event.event_time
                                                                ),
                                                                "MMMM d, yyyy 'at' h:mm a"
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-start gap-1.5 text-xs">
                                                        <MapPin
                                                            className="w-3 h-3 mt-0.5 flex-shrink-0"
                                                            style={{
                                                                color: colors.red,
                                                            }}
                                                        />
                                                        <span
                                                            className="line-clamp-1"
                                                            style={{
                                                                color: colors.black,
                                                                fontFamily:
                                                                    "nunito, sans-serif",
                                                            }}
                                                        >
                                                            {
                                                                event.event_location
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p
                                className="text-center mb-6"
                                style={{
                                    color: colors.gray,
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                No upcoming events at this time. Check back
                                soon!
                            </p>
                        )}

                        {/* See All Events Link */}
                        <div className="text-center">
                            <Link
                                href="/events"
                                onClick={handleClose}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    backgroundColor: colors.primary,
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                See All Events
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
