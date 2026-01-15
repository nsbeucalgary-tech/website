"use client";

import { useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    Calendar,
    Clock,
    MapPin,
    LinkIcon,
    ArrowLeft,
    Calendar1,
} from "lucide-react";
import { colors } from "@/app/lib/helper";
import AddEventModal from "./AddEventModal";
import { Event } from "@/app/lib/type";
import EditEventModal from "./EditEventModal";
import { format } from "date-fns";
import Image from "next/image";
import DeleteModal from "./DeleteEventModal";
import Link from "next/link";
import LogoutButton from "@/app/admin/LogoutButton";

export default function AdminEventsPage({ events }: { events: Event[] }) {
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);
    const [deleteEvent, setDeleteEvent] = useState<Event | null>(null);

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
                    Manage Events
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

                    <LogoutButton />

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:scale-105 transition text-white"
                        style={{
                            backgroundColor: colors.primary,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        <Plus size={20} /> Add Events
                    </button>
                </div>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div
                        key={event.event_id}
                        className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 overflow-hidden
                        } ${
                            event.is_important
                                ? "ring-1 ring-green-500 text-white"
                                : ""
                        }`}
                        style={{
                            borderColor: event.is_important
                                ? colors.primary
                                : colors.gray,
                            backgroundColor: event.is_important
                                ? colors.black
                                : "white",
                        }}
                    >
                        {/* Event Image/Poster */}
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
                                    className="w-full h-full flex items-center justify-center"
                                    style={{ color: colors.primary }}
                                >
                                    <Calendar className="w-20 h-20" />
                                </div>
                            )}
                        </div>

                        {/* Event Details */}
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <h3
                                    className="text-xl font-bold flex-1"
                                    style={{
                                        color: colors.primary,
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    {event.event_name}
                                </h3>

                                <div className="flex gap-2 ml-4">
                                    <button
                                        onClick={() => setEditingEvent(event)}
                                        className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                                        aria-label="Edit event"
                                    >
                                        <Pencil
                                            size={18}
                                            style={{ color: colors.primary }}
                                        />
                                    </button>

                                    <button
                                        className="p-2 rounded-lg hover:bg-red-100 transition-all duration-200"
                                        aria-label="Delete event"
                                        onClick={() => setDeleteEvent(event)}
                                    >
                                        <Trash2
                                            size={18}
                                            style={{ color: colors.red }}
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Event Info */}
                            <div
                                className="space-y-2 text-sm mb-4"
                                style={{ fontFamily: "nunito, sans-serif" }}
                            >
                                <div className="flex items-start gap-2">
                                    <Clock
                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                        style={{ color: colors.yellow }}
                                    />
                                    <span
                                        style={{
                                            color: !event.is_important
                                                ? colors.black
                                                : "white",
                                        }}
                                    >
                                        {event.event_time
                                            ? format(
                                                  new Date(event.event_time),
                                                  "MMMM d, yyyy 'at' h:mm a"
                                              )
                                            : "No date available"}
                                    </span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MapPin
                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                        style={{ color: colors.red }}
                                    />
                                    <span
                                        style={{
                                            color: !event.is_important
                                                ? colors.black
                                                : "white",
                                        }}
                                    >
                                        {event.event_location}
                                    </span>
                                </div>
                            </div>

                            {/* Event Link */}
                            {event.event_link && (
                                <div className="flex items-start gap-2 mt-2">
                                    <LinkIcon
                                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                                        style={{ color: colors.primary }}
                                    />
                                    <a
                                        href={event.event_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold hover:underline break-all"
                                        style={{ color: colors.primary }}
                                    >
                                        Event Link
                                    </a>
                                </div>
                            )}

                            {/* Event Description */}
                            {event.event_description && (
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{
                                        color: !event.is_important
                                            ? colors.black
                                            : "white",
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    {event.event_description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {events.length === 0 && (
                <div className="text-center py-20">
                    <Calendar1
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
                        No Events Yet
                    </h3>
                    <p
                        className="text-lg mb-6"
                        style={{
                            color: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Click the &quot;Add Event&quot; button to get started
                    </p>
                </div>
            )}

            {/* Modals */}
            {showAddModal && (
                <AddEventModal onCloseAction={() => setShowAddModal(false)} />
            )}

            {editingEvent && (
                <EditEventModal
                    event={editingEvent}
                    onClose={() => setEditingEvent(null)}
                />
            )}

            {deleteEvent && (
                <DeleteModal
                    event={deleteEvent}
                    onClose={() => setDeleteEvent(null)}
                />
            )}
        </div>
    );
}
