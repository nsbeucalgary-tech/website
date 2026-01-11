import EventsClient from "./components/EventClient";

// Type definitions matching database schema
export interface Event {
    event_name: string;
    event_location: string;
    event_time: string; // ISO string from TIMESTAMPTZ
    event_description: string;
    event_poster: string; // base64 string
}

// Fetch data from database (Server Component)
export async function getEvents(): Promise<Event[]> {
    // TODO: Replace with actual database fetch
    // const events = await db.query('SELECT * FROM events ORDER BY event_time');

    // Dummy data for now
    return [
        {
            event_name: "NSBE Welcome Mixer",
            event_location: "Engineering Building, Room 101",
            event_time: "2026-01-13T17:30:00Z",
            event_description:
                "Join us for our Welcome Mixer! Meet fellow NSBE members, enjoy refreshments, and learn about upcoming events and opportunities. This is a great chance to network and connect with the NSBE community.",
            event_poster: "/AboutUsPhoto.png",
        },
        {
            event_name: "Resume Workshop",
            event_location: "Student Union, Room 204",
            event_time: "2026-02-17T17:30:00Z",
            event_description:
                "Learn how to craft a compelling resume that stands out to employers. Our industry experts will review your resume and provide personalized feedback. Bring your current resume or draft!",
            event_poster: "/AboutUsPhoto.png",
        },
        {
            event_name: "Interview Prep Workshop",
            event_location: "Career Centre, Main Hall",
            event_time: "2026-03-30T17:30:00Z",
            event_description:
                "Master the art of interviewing! We'll cover common interview questions, behavioral techniques, and technical interview strategies. Participate in mock interviews with feedback.",
            event_poster: "/AboutUsPhoto.png",
        },
        {
            event_name: "Career Fair",
            event_location: "MacEwan Hall Ballroom",
            event_time: "2026-04-07T17:30:00Z",
            event_description:
                "Connect with top employers in engineering and technology! Bring your resume, dress professionally, and be ready to make lasting impressions with recruiters from leading companies.",
            event_poster: "/AboutUsPhoto.png",
        },
        {
            event_name: "Grad School & Academia Info Session",
            event_location: "Science Theatre A",
            event_time: "2026-03-12T17:00:00Z",
            event_description:
                "Considering graduate school or an academic career? Learn about the application process, funding opportunities, research positions, and hear from current grad students and professors.",
            event_poster: "/AboutUsPhoto.png",
        },
        {
            event_name: "Study Night #3",
            event_location: "TFDL, Group Study Room 3",
            event_time: "2026-03-25T17:00:00Z",
            event_description:
                "Join your NSBE peers for a focused study session! Work on assignments, prepare for exams, and collaborate with fellow engineering students. Snacks and coffee provided.",
            event_poster: "/AboutUsPhoto.png",
        },
        {
            event_name: "Study Night #4 (Study & Snack)",
            event_location: "Engineering Lounge",
            event_time: "2026-04-03T17:00:00Z",
            event_description:
                "Final exam prep study session! Come study with fellow NSBE members and enjoy free snacks and drinks. We'll have tutors available to help with difficult concepts.",
            event_poster: "/AboutUsPhoto.png",
        },
        {
            event_name: "Exec & Volunteer End of Year Party",
            event_location: "To Be Announced",
            event_time: "2026-04-28T18:00:00Z",
            event_description:
                "Celebrate the end of the academic year with our amazing exec team and volunteers! Enjoy food, music, games, and reflect on all we've accomplished together this year.",
            event_poster: "/AboutUsPhoto.png",
        },
    ];
}

export default async function EventsPage() {
    const events = await getEvents();

    return <EventsClient events={events} />;
}