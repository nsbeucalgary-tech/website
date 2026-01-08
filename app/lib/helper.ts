// Database structure for images
export const imageDatabase = {
    hero: [
        {
            id: 1,
            url: "/i1.png",
            alt: "Engineering Students",
        },
        {
            id: 2,
            url: "/i2.png",
            alt: "Team Collaboration",
        },
        {
            id: 3,
            url: "/i3.png",
            alt: "STEM Education",
        },
        {
            id: 4,
            url: "/i4.png",
            alt: "Innovation Lab",
        },
    ],
    sponsors: {
        platinum: [
            {
                id: 1,
                name: "Stantec",
                url: "/Stantec-Logo.png",
                tier: "platinum" as const,
            },
        ],
        gold: [
            {
                id: 2,
                name: "Brainstem",
                url: "/Brainstem-Logo.png",
                tier: "gold" as const,
            },
        ],
        silver: [],
        bronze: [],
    },
};

export const colors = {
    primary: "#2bb463",
    yellow: "#fdf152",
    red: "#ee1b3b",
    black: "#000000",
    gray: "#cccccc",
} as const;

export const offerItems = [
    {
        title: "DIVERSITY & COMMUNITY",
        description:
            "Diversity and Community in the National Society of Black Engineers (NSBE) at the University of Calgary highlight the importance of inclusivity and fostering a sense of belonging among members. The chapter strives to create an environment where diverse perspectives are valued and celebrated.",
        icon: "/icon3.png",
    },
    {
        title: "ACADEMIC EXCELLENCE",
        description:
            "Academic Excellence in the National Society of Black Engineers (NSBE) at the University of Calgary refers to the efforts of the NSBE chapter to promote the highest standards of academic excellence in engineering. This includes the application of engineering principles to solve real-world problems.",
        icon: "/icon_ae.gif",
    },
    {
        title: "PROFESSIONAL DEVELOPMENT",
        description:
            "Innovation at the National Society of Black Engineers (NSBE) at the University of Calgary involves fostering a collaborative environment where diverse perspectives come together to develop creative solutions to address challenges and opportunities in the engineering field.",
        icon: "/icon2.png",
    },
];
