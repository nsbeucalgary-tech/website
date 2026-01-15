"use client";

import { useRef, FormEvent } from "react";
import {
    Linkedin,
    Instagram,
    Facebook,
    Twitter,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { colors } from "@/app/lib/helper";
import { FaDiscord } from "react-icons/fa";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formRef.current) {
            emailjs
                .sendForm(
                    "service_t4449fb",
                    "template_sovxft5",
                    formRef.current,
                    {
                        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                    }
                )
                .then(
                    () => {
                        console.log("SUCCESS! Message Sent!");
                        formRef.current?.reset();
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        }
    };

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
                        GET IN TOUCH
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: colors.yellow,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Have questions, suggestions, or feedback? We&apos;d love
                        to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div
                    className="grid lg:grid-cols-3 gap-8 rounded-2xl overflow-hidden shadow-2xl"
                    style={{ backgroundColor: "white" }}
                >
                    {/* Contact Information Sidebar */}
                    <div
                        className="lg:col-span-1 p-8"
                        style={{ backgroundColor: colors.black }}
                    >
                        <h2
                            className="text-2xl font-bold mb-4"
                            style={{
                                color: colors.primary,
                                fontFamily: "impact, sans-serif",
                            }}
                        >
                            CONTACT INFORMATION
                        </h2>
                        <p
                            className="text-sm mb-8"
                            style={{
                                color: colors.gray,
                                fontFamily: "nunito, sans-serif",
                            }}
                        >
                            Connect with us through any of the following
                            channels
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: colors.primary }}
                                >
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p
                                        className="font-semibold mb-1"
                                        style={{
                                            color: "white",
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        Address
                                    </p>
                                    <p
                                        className="text-sm"
                                        style={{
                                            color: colors.gray,
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        2500 University Dr NW
                                        <br />
                                        Calgary, AB T2N 1N4
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: colors.yellow }}
                                >
                                    <Phone className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p
                                        className="font-semibold mb-1"
                                        style={{
                                            color: "white",
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+11234567890"
                                        className="text-sm hover:underline cursor-pointer"
                                        style={{
                                            color: colors.gray,
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        +1 403 6140174
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: colors.red }}
                                >
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p
                                        className="font-semibold mb-1"
                                        style={{
                                            color: "white",
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        Email
                                    </p>
                                    <a
                                        href="mailto:nsbeuofc@gmail.com"
                                        className="text-sm hover:underline cursor-pointer"
                                        style={{
                                            color: colors.gray,
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        nsbeuofc@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-12">
                            <p
                                className="text-center font-semibold mb-4"
                                style={{
                                    color: "white",
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                FOLLOW US
                            </p>
                            <div className="flex justify-center gap-3">
                                <a
                                    href="https://www.linkedin.com/company/nsbe-university-of-calgary/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.1)",
                                        border: `2px solid ${colors.gray}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#0e76a8";
                                        e.currentTarget.style.borderColor =
                                            "#0e76a8";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "rgba(255, 255, 255, 0.1)";
                                        e.currentTarget.style.borderColor =
                                            colors.gray;
                                    }}
                                >
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>

                                <a
                                    href="https://discord.gg/7hJnzrur"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.1)",
                                        border: `2px solid ${colors.gray}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#7289da";
                                        e.currentTarget.style.borderColor =
                                            "#7289da";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "rgba(255, 255, 255, 0.1)";
                                        e.currentTarget.style.borderColor =
                                            colors.gray;
                                    }}
                                >
                                    <FaDiscord className="w-5 h-5 text-white" />
                                </a>

                                <a
                                    href="https://www.instagram.com/nsbeucalgary?igsh=dTc5NG4wZDc1NmF4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.1)",
                                        border: `2px solid ${colors.gray}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#8a3ab9";
                                        e.currentTarget.style.borderColor =
                                            "#8a3ab9";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "rgba(255, 255, 255, 0.1)";
                                        e.currentTarget.style.borderColor =
                                            colors.gray;
                                    }}
                                >
                                    <Instagram className="w-5 h-5 text-white" />
                                </a>

                                <a
                                    href="https://www.facebook.com/profile.php?id=61554684322155&mibextid=PtKPJ9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.1)",
                                        border: `2px solid ${colors.gray}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#3b5998";
                                        e.currentTarget.style.borderColor =
                                            "#3b5998";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "rgba(255, 255, 255, 0.1)";
                                        e.currentTarget.style.borderColor =
                                            colors.gray;
                                    }}
                                >
                                    <Facebook className="w-5 h-5 text-white" />
                                </a>

                                <a
                                    href="https://x.com/nsbeuofc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{
                                        backgroundColor:
                                            "rgba(255, 255, 255, 0.1)",
                                        border: `2px solid ${colors.gray}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#00acee";
                                        e.currentTarget.style.borderColor =
                                            "#00acee";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "rgba(255, 255, 255, 0.1)";
                                        e.currentTarget.style.borderColor =
                                            colors.gray;
                                    }}
                                >
                                    <Twitter className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 p-8">
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="user_name"
                                    className="block text-sm font-medium mb-2"
                                    style={{
                                        color: colors.black,
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    className="w-full px-4 py-3 text-black rounded-lg border-2 border-gray-300 focus:border-[#2bb463] outline-none transition-all duration-300"
                                    style={{
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="user_email"
                                    className="block text-sm font-medium mb-2"
                                    style={{
                                        color: colors.black,
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full px-4 py-3 text-black rounded-lg border-2 border-gray-300 focus:border-[#2bb463] outline-none transition-all duration-300"
                                    style={{
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                    style={{
                                        color: colors.black,
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 text-black rounded-lg border-2 border-gray-300 focus:border-[#2bb463] outline-none transition-all duration-300 resize-none"
                                    style={{
                                        fontFamily: "nunito, sans-serif",
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: "white",
                                    fontFamily: "nunito, sans-serif",
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.7835558466495!2d-114.13232932310294!3d51.07554547171831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f08488ad5a7%3A0x98ebb5d9af098f8d!2sArt%20Building%2C%202500%20University%20Dr%20NW%2C%20Calgary%2C%20AB%20T2N%201N4!5e0!3m2!1sen!2sca!4v1724579634174!5m2!1sen!2sca"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="NSBE UCalgary Location"
                    />
                </div>
            </section>
        </div>
    );
}
