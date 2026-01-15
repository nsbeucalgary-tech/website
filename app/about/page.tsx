import { Metadata } from "next";
import AboutVideo from "./components/AboutVideo";
import Offerings from "./components/Offerings";
import Statistics from "./components/Statistics";
import { colors } from "@/app/lib/helper";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about our mission, impact, and commitment to excellence in STEM.",
};

export default function AboutPage() {
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
                        ABOUT US
                    </h1>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{
                            color: colors.yellow,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        Learn more about our mission, impact, and commitment to
                        excellence in STEM.
                    </p>
                </div>
            </section>

            {/* Content Wrapper */}
            <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
                {/* Mission Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h2
                        className="text-3xl md:text-4xl font-extrabold text-center mb-8"
                        style={{
                            fontFamily: "impact, sans-serif",
                            color: colors.black,
                        }}
                    >
                        OUR MISSION
                    </h2>

                    <p
                        className="text-lg leading-relaxed text-justify max-w-4xl mx-auto"
                        style={{
                            fontFamily: "nunito, sans-serif",
                            color: colors.black,
                        }}
                    >
                        NSBE is a non-profit organization that promotes and
                        supports the professional development of collegiate.
                        NSBE UCalgary, founded in 2023, is dedicated to
                        empowering and inspiring Black students and
                        professionals in Science, Technology, Engineering, and
                        Mathematics (STEM). As a proud chapter of the National
                        Society of Black Engineers (NSBE), we are committed to
                        increasing the number of culturally responsible Black
                        engineers who excel academically, succeed
                        professionally, and positively impact their communities.
                        Whether you are a student, professional, or ally, NSBE
                        UCalgary welcomes you.
                    </p>
                </div>

                {/* Statistics */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <Statistics />
                </div>

                {/* Video Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex justify-center">
                    <div className="w-full md:w-3/4">
                        <AboutVideo />
                    </div>
                </div>

                {/* Offerings */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h2
                        className="text-3xl md:text-4xl font-extrabold text-center mb-10"
                        style={{
                            fontFamily: "impact, sans-serif",
                            color: colors.black,
                        }}
                    >
                        WHAT DO WE OFFER?
                    </h2>
                    <Offerings />
                </div>

                {/* Call to Action */}
                <div className="text-center pt-12">
                    <p
                        className="text-lg mb-8 max-w-3xl mx-auto"
                        style={{
                            fontFamily: "nunito, sans-serif",
                            color: colors.black,
                        }}
                    >
                        Join us as we strive for excellence, innovation, and
                        impact in STEM. Get involved and help shape the future.
                    </p>

                    <a
                        href="/get-involved"
                        className="inline-block transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{
                            backgroundColor: colors.primary,
                            color: "white",
                            fontFamily: "nunito, sans-serif",
                            fontWeight: "bold",
                            fontSize: "1.125rem",
                            padding: "1rem 2rem",
                            borderRadius: "0.75rem",
                        }}
                    >
                        GET INVOLVED
                    </a>
                </div>
            </section>
        </div>
    );
}
