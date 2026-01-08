// Database structure for images
export const imageDatabase = {
    hero: [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1920",
            alt: "Engineering Students",
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
            alt: "Team Collaboration",
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920",
            alt: "STEM Education",
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920",
            alt: "Innovation Lab",
        },
    ],
    sponsors: {
        platinum: [
            {
                id: 1,
                name: "Stantec",
                url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
                tier: "platinum" as const,
            },
        ],
        gold: [
            {
                id: 2,
                name: "Brainstem",
                url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
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
    },
    {
        title: "ACADEMIC EXCELLENCE",
        description:
            "Academic Excellence in the National Society of Black Engineers (NSBE) at the University of Calgary refers to the efforts of the NSBE chapter to promote the highest standards of academic excellence in engineering. This includes the application of engineering principles to solve real-world problems.",
    },
    {
        title: "PROFESSIONAL DEVELOPMENT",
        description:
            "Innovation at the National Society of Black Engineers (NSBE) at the University of Calgary involves fostering a collaborative environment where diverse perspectives come together to develop creative solutions to address challenges and opportunities in the engineering field.",
    },
];
