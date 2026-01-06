// components/Footer.tsx
import { colors } from "@/app/page";

export default function Footer() {
    return (
        <footer
            className="w-screen py-8"
            style={{ backgroundColor: colors.black }}
        >
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p style={{ color: colors.gray }}>
                    © 2025 NSBE UCalgary Chapter. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
