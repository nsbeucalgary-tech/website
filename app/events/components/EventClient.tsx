"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, isSameDay } from "date-fns";
import { MapPin, Clock, Calendar as CalendarIcon, LinkIcon } from "lucide-react";
import { colors } from "@/app/lib/helper";
import "./EventCalendar.css";
import { Value } from "react-calendar/dist/shared/types.js";
import { Event } from "@/app/lib/type";
interface EventsClientProps {
    events: Event[];
}

export default function EventsClient({ events }: EventsClientProps) {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const toDate = (value: string | Date) =>
        value instanceof Date ? value : new Date(value);

    // Get upcoming events (next 4)
    const upcomingEvents = useMemo(() => {
        const now = new Date();
        return events
            .filter((event) => new Date(event.event_time) >= now)
            .sort(
                (a, b) =>
                    new Date(a.event_time).getTime() -
                    new Date(b.event_time).getTime()
            )
            .slice(0, 4);
    }, [events]);

    // Get events for selected date
    const selectedDateEvents = useMemo(() => {
        return events.filter((event) =>
            isSameDay(toDate(event.event_time), selectedDate)
        );
    }, [events, selectedDate]);

    // Handle date click
    const handleDateChange = (value: Value) => {
        if (!value || Array.isArray(value)) return;

        setSelectedDate(value);

        const dayEvents = events.filter((event) =>
            isSameDay(toDate(event.event_time), value)
        );

        setSelectedEvent(dayEvents.length > 0 ? dayEvents[0] : null);
    };

    const EventCard = ({
        event,
        featured = false,
    }: {
        event: Event;
        featured?: boolean;
    }) => (
        <div
            onClick={() => setSelectedEvent(event)}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 overflow-hidden ${
                featured ? "md:col-span-1" : ""
            }`}
            style={{ borderColor: colors.gray }}
        >
            <div className="relative w-full h-48 bg-gray-200">
                {event.event_poster ? (
                    <Image
                        src={event.event_poster}
                        alt={event.event_name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center text-4xl font-bold"
                        style={{ color: colors.primary }}
                    >
                        <CalendarIcon className="w-20 h-20" />
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3
                    className="text-xl font-bold mb-3"
                    style={{
                        color: colors.primary,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {event.event_name}
                </h3>
                <div
                    className="space-y-2 text-sm"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <div className="flex items-start gap-2">
                        <Clock
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: colors.yellow }}
                        />
                        <span style={{ color: colors.black }}>
                            {format(
                                toDate(event.event_time),
                                "MMMM d, yyyy 'at' h:mm a"
                            )}
                        </span>
                    </div>
                    <div className="flex items-start gap-2">
                        <MapPin
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: colors.red }}
                        />
                        <span style={{ color: colors.black }}>
                            {event.event_location}
                        </span>
                    </div>
                </div>
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
                        EVENTS
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: colors.yellow,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Join us for exciting events, workshops, and networking
                        opportunities
                    </p>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                    style={{
                        fontFamily: "impact, sans-serif",
                        color: colors.black,
                    }}
                >
                    UPCOMING EVENTS
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {upcomingEvents.map((event) => (
                        <EventCard key={event.event_id} event={event} featured />
                    ))}
                </div>
            </section>

            {/* Calendar Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4"
                    style={{
                        fontFamily: "impact, sans-serif",
                        color: colors.black,
                    }}
                >
                    EVENT CALENDAR
                </h2>
                <div
                    className="w-24 h-1.5 mx-auto mb-12 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                />

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Calendar */}
                    <div
                        className={`transition-all duration-300 ${
                            selectedDateEvents.length > 0 || selectedEvent
                                ? "lg:flex-[1]"
                                : "lg:flex-[2]"
                        }`}
                    >
                        <div
                            className="bg-white rounded-2xl shadow-xl p-6 border-2"
                            style={{ borderColor: colors.gray }}
                        >
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                className="w-full border-none"
                                tileContent={({ date }) => {
                                    const dayEvents = events.filter((event) =>
                                        isSameDay(
                                            toDate(event.event_time),
                                            date
                                        )
                                    );
                                    return dayEvents.length > 0 ? (
                                        <div className="mt-1 flex items-center justify-center gap-2 px-1">
                                            <span
                                                className="h-2 w-2 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        colors.primary,
                                                }}
                                            />
                                            <p
                                                className="max-w-[90%] truncate text-xs font-medium"
                                                style={{
                                                    color: colors.primary,
                                                }}
                                                title={dayEvents[0]?.event_name}
                                            >
                                                {dayEvents[0]?.event_name}
                                            </p>
                                        </div>
                                    ) : null;
                                }}
                                tileClassName={({ date }) => {
                                    const isSelected = isSameDay(
                                        date,
                                        selectedDate
                                    );
                                    const hasEvents = events.some((event) =>
                                        isSameDay(
                                            toDate(event.event_time),
                                            date
                                        )
                                    );
                                    return `${
                                        isSelected ? "!bg-green-100" : ""
                                    } ${hasEvents ? "font-bold" : ""}`;
                                }}
                            />
                        </div>
                    </div>

                    {/* Event Details */}
                    {(selectedDateEvents.length > 0 || selectedEvent) && (
                        <div className="lg:w-1/2">
                            {selectedEvent ? (
                                <div
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden border-2"
                                    style={{ borderColor: colors.primary }}
                                >
                                    <div className="relative w-full h-64 bg-gray-200">
                                        {selectedEvent.event_poster ? (
                                            <Image
                                                src={selectedEvent.event_poster}
                                                alt={selectedEvent.event_name}
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
                                                <CalendarIcon className="w-32 h-32" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-8">
                                        <h3
                                            className="text-3xl font-bold mb-4"
                                            style={{
                                                color: colors.primary,
                                                fontFamily:
                                                    "impact, sans-serif",
                                            }}
                                        >
                                            {selectedEvent.event_name}
                                        </h3>
                                        <div
                                            className="space-y-3 mb-6"
                                            style={{
                                                fontFamily:
                                                    "nunito, sans-serif",
                                            }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <Clock
                                                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                                                    style={{
                                                        color: colors.yellow,
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        color: colors.black,
                                                    }}
                                                    className="font-semibold"
                                                >
                                                    {format(
                                                        toDate(
                                                            selectedEvent.event_time
                                                        ),
                                                        "EEEE, MMMM d, yyyy 'at' h:mm a"
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <MapPin
                                                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                                                    style={{
                                                        color: colors.red,
                                                    }}
                                                />
                                                <span
                                                    style={{
                                                        color: colors.black,
                                                    }}
                                                    className="font-semibold"
                                                >
                                                    {
                                                        selectedEvent.event_location
                                                    }
                                                </span>
                                            </div>
                                            {selectedEvent.event_link && (
                                                <div className="flex items-start gap-3">
                                                    <LinkIcon
                                                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                                                        style={{
                                                            color: colors.primary,
                                                        }}
                                                    />
                                                    <a
                                                        href={
                                                            selectedEvent.event_link
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-semibold hover:underline break-all"
                                                        style={{
                                                            color: colors.primary,
                                                        }}
                                                    >
                                                        RSVP Link
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        <p
                                            className="text-base leading-relaxed"
                                            style={{
                                                color: colors.black,
                                                fontFamily:
                                                    "nunito, sans-serif",
                                            }}
                                        >
                                            {selectedEvent.event_description}
                                        </p>
                                    </div>
                                </div>
                            ) : selectedDateEvents.length > 0 ? (
                                <div className="space-y-4">
                                    {selectedDateEvents.map((event) => (
                                        <div
                                            key={event.event_id}
                                            onClick={() =>
                                                setSelectedEvent(event)
                                            }
                                            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2"
                                            style={{ borderColor: colors.gray }}
                                        >
                                            <h3
                                                className="text-xl font-bold mb-2"
                                                style={{
                                                    color: colors.primary,
                                                    fontFamily:
                                                        "nunito, sans-serif",
                                                }}
                                            >
                                                {event.event_name}
                                            </h3>
                                            <p
                                                className="text-sm"
                                                style={{
                                                    color: colors.black,
                                                    fontFamily:
                                                        "nunito, sans-serif",
                                                }}
                                            >
                                                {format(
                                                    toDate(event.event_time),
                                                    "h:mm a"
                                                )}{" "}
                                                • {event.event_location}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div
                                    className="bg-white rounded-2xl shadow-xl p-12 text-center border-2"
                                    style={{ borderColor: colors.gray }}
                                >
                                    <CalendarIcon
                                        className="w-24 h-24 mx-auto mb-4"
                                        style={{ color: colors.gray }}
                                    />
                                    <p
                                        className="text-xl"
                                        style={{
                                            color: colors.black,
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        No events scheduled for this date
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
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
                        DON&apos;T MISS OUT!
                    </h2>
                    <p
                        className="text-lg mb-8"
                        style={{
                            color: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Join NSBE UCalgary to stay updated on all our events and
                        opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeSIWUdDBW1eiZWvzlO4IjsIxml8AEl5dLUCbxTwGs0YZD7pw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: colors.primary,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Become a Member
                        </a>
                        <a
                            href="/get-involved"
                            className="px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: colors.yellow,
                                color: colors.black,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Get Involved
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
