"use client";

import { useState } from "react";
import { loginAdmin } from "./actions";
import { colors } from "@/app/lib/helper";
import { Mail, Lock, LogIn, AlertCircle } from "lucide-react";

export default function AdminLoginForm() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError("");
        const result = await loginAdmin(formData);
        if (result?.error) {
            setError(result.error);
            setLoading(false);
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
            {/* Header */}
            <div className="text-center mb-8">
                <div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${colors.primary}20` }}
                >
                    <Lock
                        className="w-10 h-10"
                        style={{ color: colors.primary }}
                    />
                </div>
                <h2
                    className="text-3xl font-extrabold mb-2"
                    style={{
                        color: colors.black,
                        fontFamily: "impact, sans-serif",
                    }}
                >
                    ADMIN LOGIN
                </h2>
                <p
                    className="text-sm"
                    style={{
                        color: colors.gray,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    Enter your credentials to access the admin panel
                </p>
            </div>

            {/* Error Message */}
            {error && (
                <div
                    className="mb-6 p-4 rounded-xl flex items-center gap-3"
                    style={{ backgroundColor: `${colors.red}20` }}
                >
                    <AlertCircle
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: colors.red }}
                    />
                    <p
                        className="text-sm font-semibold"
                        style={{
                            color: colors.red,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        {error}
                    </p>
                </div>
            )}

            {/* Form */}
            <form action={handleSubmit} className="space-y-5">
                {/* Email Input */}
                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <Mail
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        Username
                    </label>
                    <input
                        name="username"
                        type="text"
                        placeholder="admin"
                        required
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                    <label
                        className="flex items-center gap-2 font-bold text-sm text-gray-700"
                        style={{ fontFamily: "nunito, sans-serif" }}
                    >
                        <Lock
                            className="w-4 h-4"
                            style={{ color: colors.primary }}
                        />
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="w-full border-2 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2bb463] transition-all"
                        style={{
                            borderColor: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
                    style={{
                        backgroundColor: colors.primary,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Logging in...
                        </>
                    ) : (
                        <>
                            <LogIn size={20} />
                            Login to Admin Panel
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
