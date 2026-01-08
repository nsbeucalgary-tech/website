import TeamClient from "./components/TeamClient";


// Type definitions matching database schema
export interface Exec {
    fname: string;
    lname: string;
    exec_positon: 1 | 2 | 3;
    exec_role: string;
    exec_ucid: number;
    exec_email: string;
    exec_bio: string;
    exec_link: string;
    exec_picture: string;
}

// Fetch data from database (Server Component)
async function getExecs(): Promise<Exec[]> {
    // TODO: Replace with actual database fetch
    // const execs = await db.query('SELECT * FROM execs ORDER BY exec_positon, lname');

    // Dummy data for now
    return [
        {
            fname: "Eshilama",
            lname: "Akalumhe",
            exec_positon: 1,
            exec_role: "President",
            exec_ucid: 30123456,
            exec_email: "president@nsbeucalgary.ca",
            exec_bio:
                "Leading NSBE UCalgary with passion and dedication to empower Black engineers across campus.",
            exec_link: "https://linkedin.com/in/example",
            exec_picture: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
        },
        {
            fname: "Seyi",
            lname: "Akinro",
            exec_positon: 2,
            exec_role: "Vice President - Operations",
            exec_ucid: 30123457,
            exec_email: "vp-ops@nsbeucalgary.ca",
            exec_bio:
                "Overseeing operations and ensuring smooth execution of all chapter activities.",
            exec_link: "https://linkedin.com/in/example",
            exec_picture: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
        },
        {
            fname: "Nonso",
            lname: "Esemezie",
            exec_positon: 2,
            exec_role: "Vice President - Programs",
            exec_ucid: 30123458,
            exec_email: "vp-programs@nsbeucalgary.ca",
            exec_bio:
                "Managing all programs and events to create meaningful experiences for members.",
            exec_link: "https://linkedin.com/in/example",
            exec_picture: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
        },
        {
            fname: "Chinaza",
            lname: "Enyinnaya-Okidi",
            exec_positon: 2,
            exec_role: "Secretary",
            exec_ucid: 30123459,
            exec_email: "secretary@nsbeucalgary.ca",
            exec_bio:
                "Maintaining records and coordinating communications for the chapter.",
            exec_link: "https://linkedin.com/in/example",
            exec_picture: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
        },
        {
            fname: "Adanna",
            lname: "Izugbokwe",
            exec_positon: 2,
            exec_role: "Programs Coordinator",
            exec_ucid: 30123460,
            exec_email: "programs@nsbeucalgary.ca",
            exec_bio:
                "Coordinating engaging programs for professional and academic development.",
            exec_link: "https://linkedin.com/in/example",
            exec_picture: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
        },
        {
            fname: "Ireoluwa",
            lname: "Fagbuyi",
            exec_positon: 3,
            exec_role: "Finance Coordinator",
            exec_ucid: 30123461,
            exec_email: "finance@nsbeucalgary.ca",
            exec_bio:
                "Managing chapter finances and ensuring fiscal responsibility.",
            exec_link: "https://linkedin.com/in/example",
            exec_picture: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920",
        },
    ];
}

export default async function TeamPage() {
    const execs = await getExecs();

    return <TeamClient execs={execs} />;
}
