"use client";

import Link from "next/link";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
} from "lucide-react";
import { colors } from "../lib/helper";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full" style={{ backgroundColor: colors.black }}>
            {/* Decorative Top Border */}
            <div
                className="h-1 w-full"
                style={{
                    background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.yellow} 50%, ${colors.red} 100%)`,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mb-8">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/profile.php?id=61554684322155&mibextid=PtKPJ9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: `2px solid ${colors.gray}`,
                        }}
                        aria-label="Facebook"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#3b5998";
                            e.currentTarget.style.borderColor = "#3b5998";
                            e.currentTarget.style.boxShadow =
                                "0 8px 16px #3b599840";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.borderColor = colors.gray;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <Facebook className="w-6 h-6 text-white" />
                    </a>

                    {/* Twitter */}
                    <a
                        href="https://x.com/nsbeuofc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: `2px solid ${colors.gray}`,
                        }}
                        aria-label="Twitter"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#00acee";
                            e.currentTarget.style.borderColor = "#00acee";
                            e.currentTarget.style.boxShadow =
                                "0 8px 16px #00acee40";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.borderColor = colors.gray;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <Twitter className="w-6 h-6 text-white" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/nsbe-university-of-calgary/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: `2px solid ${colors.gray}`,
                        }}
                        aria-label="LinkedIn"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#0e76a8";
                            e.currentTarget.style.borderColor = "#0e76a8";
                            e.currentTarget.style.boxShadow =
                                "0 8px 16px #0e76a840";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.borderColor = colors.gray;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <Linkedin className="w-6 h-6 text-white" />
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/nsbeucalgary?igsh=dTc5NG4wZDc1NmF4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: `2px solid ${colors.gray}`,
                        }}
                        aria-label="Instagram"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#8a3ab9";
                            e.currentTarget.style.borderColor = "#8a3ab9";
                            e.currentTarget.style.boxShadow =
                                "0 8px 16px #8a3ab940";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.borderColor = colors.gray;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <Instagram className="w-6 h-6 text-white" />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:nsbeuofc@gmail.com"
                        className="group w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: `2px solid ${colors.gray}`,
                        }}
                        aria-label="Email"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#dd4b39";
                            e.currentTarget.style.borderColor = "#dd4b39";
                            e.currentTarget.style.boxShadow =
                                "0 8px 16px #dd4b3940";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.borderColor = colors.gray;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <Mail className="w-6 h-6 text-white" />
                    </a>

                    {/* Discord */}
                    <a
                        href="https://discord.gg/7hJnzrur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: `2px solid ${colors.gray}`,
                        }}
                        aria-label="Discord"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#7289da";
                            e.currentTarget.style.borderColor = "#7289da";
                            e.currentTarget.style.boxShadow =
                                "0 8px 16px #7289da40";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.borderColor = colors.gray;
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <FaDiscord className="w-6 h-6 text-white" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p
                        className="text-sm"
                        style={{
                            color: colors.gray,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        © {currentYear}{" "}
                        <Link
                            href="/"
                            className="font-semibold transition-colors duration-300"
                            style={{ color: colors.primary }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = colors.yellow;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = colors.primary;
                            }}
                        >
                            NSBE UCalgary Chapter
                        </Link>
                        . All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}