"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { colors } from "../lib/helper";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setIsMenuOpen(false);
            setOpenDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeMenu as EventListener);
        return () => {
            document.removeEventListener("click", closeMenu as EventListener);
        };
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/events", label: "Events" },
        { href: "/team", label: "Our Team" },
        { href: "/get-involved", label: "Get Involved" },
        {
            label: "Sponsor",
            dropdown: [
                { href: "/sponsor/academic", label: "Academic Sponsors" },
                { href: "/sponsor/business", label: "Business Sponsors" },
            ],
        },
        { href: "/contact", label: "Contact" },
    ];

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <nav
            className="sticky w-full z-50 top-0 shadow-lg"
            style={{
                backgroundColor: colors.black,
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
                >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#2bb463] transition-all duration-300">
                        <Image
                            src="/nsbe_logo.png"
                            alt="NSBE UofC Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span
                        className="text-xl md:text-2xl font-bold tracking-wide"
                        style={{
                            color: colors.primary,
                            fontFamily: "impact, sans-serif",
                            textShadow: `2px 2px 4px ${colors.black}`,
                        }}
                    >
                        NSBEUCALGARY
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => {
                        if (link.dropdown) {
                            const isDropdownActive = link.dropdown.some(
                                (item) => pathname === item.href,
                            );
                            return (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() =>
                                        setOpenDropdown(link.label)
                                    }
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button
                                        className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 group flex items-center gap-1 ${
                                            isDropdownActive
                                                ? "text-[#fdf152]"
                                                : "text-white hover:text-[#fdf152]"
                                        }`}
                                        style={{
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        {link.label}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${
                                                openDropdown === link.label
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-1 rounded-full transition-all duration-300 ${
                                                isDropdownActive
                                                    ? "bg-[#fdf152] scale-x-100"
                                                    : "bg-[#2bb463] scale-x-0 group-hover:scale-x-100"
                                            }`}
                                            style={{
                                                transformOrigin: "left",
                                            }}
                                        />
                                    </button>
                                    {/* Dropdown Menu */}
                                    <div
                                        className={`absolute top-full left-0 mt-1 w-56 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                                            openDropdown === link.label
                                                ? "opacity-100 translate-y-0 visible"
                                                : "opacity-0 -translate-y-2 invisible"
                                        }`}
                                        style={{
                                            backgroundColor: colors.black,
                                            border: `1px solid ${colors.gray}`,
                                        }}
                                    >
                                        {link.dropdown.map((item) => {
                                            const isActive =
                                                pathname === item.href;
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className={`block px-4 py-3 text-base font-semibold transition-all duration-300 ${
                                                        isActive
                                                            ? "bg-[#2bb463] text-white"
                                                            : "text-white hover:bg-[#2bb463] hover:text-white"
                                                    }`}
                                                    style={{
                                                        fontFamily:
                                                            "nunito, sans-serif",
                                                    }}
                                                >
                                                    {item.label}
                                                    {isActive && (
                                                        <span
                                                            className="ml-2 inline-block w-2 h-2 rounded-full animate-pulse"
                                                            style={{
                                                                backgroundColor:
                                                                    colors.yellow,
                                                            }}
                                                        />
                                                    )}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        }

                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href!}
                                className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 group ${
                                    isActive
                                        ? "text-[#fdf152]"
                                        : "text-white hover:text-[#fdf152]"
                                }`}
                                style={{ fontFamily: "nunito, sans-serif" }}
                            >
                                {link.label}
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-1 rounded-full transition-all duration-300 ${
                                        isActive
                                            ? "bg-[#fdf152] scale-x-100"
                                            : "bg-[#2bb463] scale-x-0 group-hover:scale-x-100"
                                    }`}
                                    style={{
                                        transformOrigin: "left",
                                    }}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden" ref={menuRef}>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 w-10 h-10 rounded-lg text-white hover:bg-[#2bb463] focus:outline-none focus:ring-2 focus:ring-[#2bb463] transition-all duration-300"
                        aria-controls="navbar-menu"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                id="navbar-menu"
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isMenuOpen
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
                style={{
                    backgroundColor: colors.black,
                    borderTop: `1px solid ${colors.gray}`,
                }}
            >
                <ul className="flex flex-col space-y-2 px-4 py-4">
                    {navLinks.map((link, index) => {
                        if (link.dropdown) {
                            const isDropdownActive = link.dropdown.some(
                                (item) => pathname === item.href,
                            );
                            return (
                                <li
                                    key={link.label}
                                    className={`transform transition-all duration-500 ${
                                        isMenuOpen
                                            ? "translate-x-0 opacity-100"
                                            : index % 2 === 0
                                              ? "-translate-x-full opacity-0"
                                              : "translate-x-full opacity-0"
                                    }`}
                                    style={{
                                        transitionDelay: isMenuOpen
                                            ? `${index * 100}ms`
                                            : "0ms",
                                    }}
                                >
                                    <button
                                        onClick={() =>
                                            toggleDropdown(link.label)
                                        }
                                        className={`w-full flex items-center justify-between px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                                            isDropdownActive
                                                ? "bg-[#2bb463] text-white"
                                                : "text-white hover:bg-[#2bb463] hover:text-white"
                                        }`}
                                        style={{
                                            fontFamily: "nunito, sans-serif",
                                        }}
                                    >
                                        <span>{link.label}</span>
                                        <svg
                                            className={`w-5 h-5 transition-transform duration-300 ${
                                                openDropdown === link.label
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {/* Mobile Dropdown */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${
                                            openDropdown === link.label
                                                ? "max-h-48 mt-2"
                                                : "max-h-0"
                                        }`}
                                    >
                                        {link.dropdown.map((item) => {
                                            const isActive =
                                                pathname === item.href;
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className={`block px-8 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                                                        isActive
                                                            ? "bg-[#2bb463] text-white"
                                                            : "text-white hover:bg-[#2bb463]/50 hover:text-white"
                                                    }`}
                                                    style={{
                                                        fontFamily:
                                                            "nunito, sans-serif",
                                                    }}
                                                >
                                                    {item.label}
                                                    {isActive && (
                                                        <span
                                                            className="ml-2 inline-block w-2 h-2 rounded-full animate-pulse"
                                                            style={{
                                                                backgroundColor:
                                                                    colors.yellow,
                                                            }}
                                                        />
                                                    )}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </li>
                            );
                        }

                        const isActive = pathname === link.href;
                        return (
                            <li
                                key={link.href}
                                className={`transform transition-all duration-500 ${
                                    isMenuOpen
                                        ? "translate-x-0 opacity-100"
                                        : index % 2 === 0
                                          ? "-translate-x-full opacity-0"
                                          : "translate-x-full opacity-0"
                                }`}
                                style={{
                                    transitionDelay: isMenuOpen
                                        ? `${index * 100}ms`
                                        : "0ms",
                                }}
                            >
                                <Link
                                    href={link.href!}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                                        isActive
                                            ? "bg-[#2bb463] text-white"
                                            : "text-white hover:bg-[#2bb463] hover:text-white"
                                    }`}
                                    style={{ fontFamily: "nunito, sans-serif" }}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span
                                            className="ml-2 inline-block w-2 h-2 rounded-full animate-pulse"
                                            style={{
                                                backgroundColor: colors.yellow,
                                            }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Accent Line */}
            <div
                className="h-1 w-full"
                style={{
                    background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.yellow} 50%, ${colors.red} 100%)`,
                }}
            />
        </nav>
    );
}
