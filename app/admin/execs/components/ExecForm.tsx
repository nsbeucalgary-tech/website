"use client";

import { useState } from "react";
import {
    Upload,
    X,
    User,
    Mail,
    Link as LinkIcon,
    FileText,
    Hash,
    Award,
} from "lucide-react";
import { colors } from "@/app/lib/helper";
import { Exec, NewExec } from "@/app/lib/type";
interface ExecFormProps {
    initialData?: Partial<Exec>;
    onSubmitAction: (data: NewExec | Exec) => Promise<void> | void;
    onCancelAction: () => void;
}

export default function ExecForm({
    initialData,
    onSubmitAction,
    onCancelAction,
}: ExecFormProps) {
    const [form, setForm] = useState<NewExec>({
        fname: initialData?.fname ?? "",
        lname: initialData?.lname ?? "",
        exec_role: initialData?.exec_role ?? "",
        exec_email: initialData?.exec_email ?? "",
        exec_ucid: initialData?.exec_ucid ?? BigInt(0),
        exec_position: initialData?.exec_position ?? 0,
        exec_bio: initialData?.exec_bio ?? "",
        exec_link: initialData?.exec_link ?? "",
        exec_picture: initialData?.exec_picture ?? "",
    });

    const [uploading, setUploading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]:
                name === "exec_position"
                    ? Number(value)
                    : name === "exec_ucid"
                    ? BigInt(value || 0)
                    : value,
        }));
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
                setForm((prev) => ({
                    ...prev,
                    exec_picture: base64String,
                }));
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
        setForm((prev) => ({ ...prev, exec_picture: "" }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmitAction(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <User
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        First Name *
                    </label>
                    <input
                        name="fname"
                        value={form.fname}
                        onChange={handleChange}
                        required
                        placeholder="e.g., John"
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <User
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        Last Name *
                    </label>
                    <input
                        name="lname"
                        value={form.lname}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Doe"
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    />
                </div>
            </div>

            {/* Role & Position */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <FileText
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        Role *
                    </label>
                    <input
                        name="exec_role"
                        value={form.exec_role}
                        onChange={handleChange}
                        required
                        placeholder="e.g., President"
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <Award
                            className="w-4 h-4"
                            style={{ color: colors.yellow }}
                        />
                        Position *
                    </label>
                    <select
                        name="exec_position"
                        value={form.exec_position}
                        onChange={handleChange}
                        required
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        <option value={0}>President (0)</option>
                        <option value={1}>Vice President (1)</option>
                        <option value={2}>Coordinator (2)</option>
                    </select>
                </div>
            </div>

            {/* Email & UCID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <Mail
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        Email *
                    </label>
                    <input
                        type="email"
                        name="exec_email"
                        value={form.exec_email}
                        onChange={handleChange}
                        required
                        placeholder="e.g., john.doe@example.com"
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <Hash
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        UCID
                    </label>
                    <input
                        type="text"
                        name="exec_ucid"
                        value={
                            form.exec_ucid.toString() === "0"
                                ? ""
                                : form.exec_ucid.toString()
                        }
                        onChange={handleChange}
                        placeholder="e.g., 12345678"
                        maxLength={8}
                        pattern="\d{8}"
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    />
                </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <FileText
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Bio
                </label>
                <textarea
                    name="exec_bio"
                    value={form.exec_bio}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about this executive..."
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all resize-none"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Profile Link */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <LinkIcon
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Profile Link
                </label>
                <input
                    type="url"
                    name="exec_link"
                    value={form.exec_link}
                    onChange={handleChange}
                    placeholder="e.g., https://linkedin.com/in/johndoe"
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Image Upload Section */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Upload
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Executive Photo
                </label>

                {form.exec_picture ? (
                    <div
                        className="relative w-full h-80 rounded-xl overflow-hidden border-2 group"
                        style={{ borderColor: colors.primary }}
                    >
                        <img
                            src={form.exec_picture}
                            alt="Executive preview"
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
                                : "Click to upload photo"}
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
                    {uploading ? "Uploading..." : "Save Executive"}
                </button>
            </div>
        </form>
    );
}
