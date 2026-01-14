"use client";

import { useState } from "react";
import { colors } from "@/app/lib/helper";
import type { Event, NewEvent } from "@/app/lib/type";
import { Upload, X, Calendar, MapPin, FileText, Star, Link } from "lucide-react";

interface EventFormProps {
    initialData?: Partial<Event>;
    onSubmitAction: (data: NewEvent | Event) => Promise<void> | void;
    onCancelAction: () => void;
}

export default function EventForm({
    initialData,
    onSubmitAction,
    onCancelAction,
}: EventFormProps) {
    const [form, setForm] = useState<NewEvent>({
        event_name: initialData?.event_name ?? "",
        event_location: initialData?.event_location ?? "",
        event_time:
            initialData?.event_time ?? new Date().toISOString().slice(0, 16),
        event_description: initialData?.event_description ?? "",
        event_poster: initialData?.event_poster ?? "",
        is_important: initialData?.is_important ?? false,
        event_link: initialData?.event_link ?? "",
    });

    console.log("Form data:", form);

    const [uploading, setUploading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, is_important: e.target.checked }));
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Image size should be less than 5MB");
            return;
        }

        setUploading(true);

        try {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setForm((prev) => ({ ...prev, event_poster: base64String }));
                setUploading(false);
            };
            reader.onerror = () => {
                alert("Failed to read file");
                setUploading(false);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload image");
            setUploading(false);
        }
    };

    const handleRemoveImage = () => {
        setForm((prev) => ({ ...prev, event_poster: "" }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmitAction(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Name */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <FileText
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Event Name *
                </label>
                <input
                    name="event_name"
                    value={form.event_name}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Welcome Mixer 2026"
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Location */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <MapPin className="w-4 h-4" style={{ color: colors.red }} />
                    Location *
                </label>
                <input
                    name="event_location"
                    value={form.event_location}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Engineering Building, Room 101"
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Date & Time */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Calendar
                        className="w-4 h-4"
                        style={{ color: colors.yellow }}
                    />
                    Date & Time *(You need to set this again when editing)
                </label>
                <input
                    type="datetime-local"
                    name="event_time"
                    value={form.event_time}
                    onChange={handleChange}
                    required
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Description */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <FileText
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Description *
                </label>
                <textarea
                    name="event_description"
                    value={form.event_description}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your event..."
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all resize-none"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Event Link */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Link
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Event Link
                </label>
                <input
                    type="url"
                    name="event_link"
                    value={form.event_link??""}
                    onChange={handleChange}
                    placeholder="e.g., https://www.example.com/event"
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* File Upload Section */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Upload
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Event Poster
                </label>

                {form.event_poster ? (
                    <div
                        className="relative w-full h-80 rounded-xl overflow-hidden border-2 group"
                        style={{ borderColor: colors.primary }}
                    >
                        <img
                            src={form.event_poster}
                            alt="Event poster preview"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={handleRemoveImage}
                                className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                                style={{ backgroundColor: colors.red }}
                                aria-label="Remove image"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <label
                        className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 hover:border-[#2bb463] hover:bg-gray-50"
                        style={{ borderColor: colors.gray }}
                    >
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                            style={{ backgroundColor: `${colors.primary}20` }}
                        >
                            <Upload
                                className="w-10 h-10"
                                style={{ color: colors.primary }}
                            />
                        </div>
                        <span
                            className="text-base font-bold mb-2 text-gray-800"
                            style={{ fontFamily: "nunito, sans-serif" }}
                        >
                            {uploading
                                ? "Uploading..."
                                : "Click to upload poster"}
                        </span>
                        <span
                            className="text-sm text-gray-500"
                            style={{ fontFamily: "nunito, sans-serif" }}
                        >
                            PNG, JPG, WEBP up to 5MB
                        </span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            disabled={uploading}
                            className="hidden"
                        />
                    </label>
                )}
            </div>

            {/* Important Checkbox */}
            <div
                className="flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer hover:bg-gray-50 transition-all"
                style={{ borderColor: colors.gray }}
                onClick={() =>
                    setForm((prev) => ({
                        ...prev,
                        is_important: !prev.is_important,
                    }))
                }
            >
                <input
                    type="checkbox"
                    checked={form.is_important}
                    onChange={handleCheckbox}
                    className="w-5 h-5 rounded cursor-pointer"
                    style={{ accentColor: colors.yellow }}
                />
                <Star
                    className="w-5 h-5"
                    style={{
                        color: form.is_important ? colors.yellow : colors.gray,
                    }}
                    fill={form.is_important ? colors.yellow : "none"}
                />
                <span
                    className="font-bold flex-1 text-gray-800"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    Mark as Important Event
                </span>
            </div>

            {/* Action Buttons */}
            <div
                className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2"
                style={{ borderColor: colors.gray }}
            >
                <button
                    type="button"
                    onClick={onCancelAction}
                    className="flex-1 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg text-gray-700 bg-gray-200 hover:bg-gray-300"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    disabled={uploading}
                    className="flex-1 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                        backgroundColor: colors.primary,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {uploading ? "Uploading..." : "Save Event"}
                </button>
            </div>
        </form>
    );
}
