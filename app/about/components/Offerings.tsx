import React from "react";
import { colors } from "@/app/lib/helper";

const offerings = [
    {
        title: "Professional Development Workshops",
        description:
            "Our workshops provide essential skills for career success, including resume building, interview techniques, and leadership. These sessions are designed to enhance your career readiness and give you a competitive edge in the job market.",
    },
    {
        title: "Academic Support",
        description:
            "We offer academic support through tutoring, study nights, and resource sharing from alumni and previous students to help members excel in their classes and achieve their academic goals.",
    },
    {
        title: "Mentorship Programs",
        description:
            "Our mentorship programs connect students with experienced professionals and peers who provide guidance, career advice, and support.",
    },
    {
        title: "Social Events and Conferences",
        description:
            "Our chapter hosts social events and attends annual NSBE conferences to foster community, networking, and professional growth.",
    },
    {
        title: "High School Outreach",
        description:
            "Our Pre-College Initiative (PCI) collaborates with partner organizations to mentor and inspire high school students in engineering and STEM.",
    },
    {
        title: "Leadership Opportunities and Community",
        description:
            "Members gain leadership experience by organizing events, leading projects, and shaping the chapter while being supported by a strong community.",
    },
];

const Offerings: React.FC = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {offerings.map((offer, idx) => (
            <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
                {/* Accent Bar */}
                <div
                    className="w-12 h-1 mb-4 rounded-full"
                    style={{ backgroundColor: colors.primary }}
                />

                <h3
                    className="text-xl md:text-2xl font-bold mb-4"
                    style={{
                        color: colors.black,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {offer.title}
                </h3>

                <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{
                        color: colors.black,
                        opacity: 0.75,
                        fontFamily: "nunito, sans-serif",
                    }}
                >
                    {offer.description}
                </p>
            </div>
        ))}
    </div>
);

export default Offerings;
