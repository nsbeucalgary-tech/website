"use client";

import { useState } from "react";
import { Upload, X, Building2, Star, Link } from "lucide-react";
import { colors } from "@/app/lib/helper";
import { NewSponsor, Sponsor } from "@/app/lib/type";

interface SponsorFormProps {
    initialData?: Partial<Sponsor>;
    onSubmitAction: (data: NewSponsor | Sponsor) => Promise<void> | void;
    onCancelAction: () => void;
}

export default function SponsorForm({
    initialData,
    onSubmitAction,
    onCancelAction,
}: SponsorFormProps) {
    const [form, setForm] = useState<NewSponsor>({
        company_name: initialData?.company_name ?? "",
        company_logo: initialData?.company_logo ?? "",
        company_status: initialData?.company_status ?? 0,
        company_link: initialData?.company_link ?? "",
    });

    const [uploading, setUploading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "company_status" ? Number(value) : value,
        }));
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("Image size should be less than 2MB");
            return;
        }

        setUploading(true);

        try {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setForm((prev) => ({
                    ...prev,
                    company_logo: base64String,
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
        setForm((prev) => ({ ...prev, company_logo: "" }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmitAction(form);
    };

    const getStatusColor = (status: number) => {
        switch (status) {
            case 0:
                return "#e5e7eb"; // Platinum
            case 1:
                return colors.yellow; // Gold
            case 2:
                return "#9ca3af"; // Silver
            case 3:
                return "#cd7f32"; // Bronze
            default:
                return colors.gray;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Building2
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Company Name *
                </label>
                <input
                    name="company_name"
                    value={form.company_name}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Tech Corp Inc."
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Sponsorship Status */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Star
                        className="w-4 h-4"
                        style={{ color: colors.yellow }}
                    />
                    Sponsorship Tier *
                </label>
                <select
                    name="company_status"
                    value={form.company_status}
                    onChange={handleChange}
                    required
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    <option value={0}>Platinum (0)</option>
                    <option value={1}>Gold (1)</option>
                    <option value={2}>Silver (2)</option>
                    <option value={3}>Bronze (3)</option>
                </select>

                {/* Status Preview */}
                <div className="flex items-center gap-2 mt-2">
                    <span
                        className="text-sm font-bold"
                        style={{
                            fontFamily: "nunito, sans-serif",
                            color: colors.gray,
                        }}
                    >
                        Preview:
                    </span>
                    <div
                        className="px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1"
                        style={{
                            backgroundColor: getStatusColor(
                                form.company_status,
                            ),
                        }}
                    >
                        <Star className="w-3 h-3" fill="white" />
                        {form.company_status === 0 && "Platinum"}
                        {form.company_status === 1 && "Gold"}
                        {form.company_status === 2 && "Silver"}
                        {form.company_status === 3 && "Bronze"}
                    </div>
                </div>
            </div>
            {/* Company Link */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Link
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Company Website Link (Optional)
                </label>
                <input
                    name="company_link"
                    value={form.company_link}
                    onChange={handleChange}
                    placeholder="e.g., https://www.techcorp.com"
                    className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                    style={{
                        borderColor: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                />
            </div>

            {/* Logo Upload Section */}
            <div className="space-y-2">
                <label
                    className="flex items-center gap-2 font-bold text-sm text-gray-700"
                    style={{ fontFamily: "nunito, sans-serif" }}
                >
                    <Upload
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                    />
                    Company Logo *
                </label>

                {form.company_logo ? (
                    <div
                        className="relative w-full h-64 rounded-xl overflow-hidden border-2 group bg-gray-50 flex items-center justify-center p-6"
                        style={{ borderColor: colors.primary }}
                    >
                        <img
                            src={form.company_logo}
                            alt={form.company_name}
                            className="max-w-full max-h-full object-contain"
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
                                : "Click to upload logo"}
                        </span>
                        <span
                            className="text-sm text-gray-500"
                            style={{ fontFamily: "nunito, sans-serif" }}
                        >
                            PNG, JPG, WEBP up to 2MB
                        </span>
                        <span
                            className="text-xs text-gray-400 mt-1"
                            style={{ fontFamily: "nunito, sans-serif" }}
                        >
                            Transparent backgrounds work best
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
                    {uploading ? "Uploading..." : "Save Sponsor"}
                </button>
            </div>
        </form>
    );
}
