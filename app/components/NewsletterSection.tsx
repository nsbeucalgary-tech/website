"use client";

import { colors } from "../lib/helper";


export default function NewsletterSection() {
    return (
        <div className="w-screen py-16" style={{ backgroundColor: "#f9f9f9" }}>
            <div className="max-w-4xl mx-auto px-4">
                <h2
                    className="text-4xl sm:text-6xl font-extrabold text-center mb-8"
                    style={{
                        color: colors.black,
                        fontFamily: "impact",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                    }}
                >
                    NEWSLETTER
                </h2>
                <p
                    className="text-lg leading-relaxed text-center mb-8"
                    style={{
                        color: colors.black,
                        fontFamily: "nunito",
                    }}
                >
                    The NSBE UCalgary Newsletter is a monthly publication that
                    keeps members informed and engaged with personal messages
                    from the chapter president, highlights of events like
                    workshops and competitions, and career development tips. It
                    also shares updates on partnerships, sponsorships, and
                    alumni news, maintaining strong community connections.
                </p>
                <div className="text-center">
                    <button
                        className="px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                        style={{
                            backgroundColor: colors.primary,
                            color: "white",
                        }}
                        onClick={() =>
                            window.open(
                                "https://mailchi.mp/ffc3b0345e78/nsbe-ucalgary-newsletter",
                                "_blank"
                            )
                        }
                    >
                        <i className="fas fa-envelope mr-2" />
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>
    );
}
