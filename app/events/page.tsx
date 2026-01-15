import { Metadata } from "next";
import { getAllEvents } from "../lib/eventCall";
import EventsClient from "./components/EventClient";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
    title: "Events",
    description:
        "Join us for exciting events, workshops, and networking opportunities.",
};
export default async function EventsPage() {
    const events = await getAllEvents();

    return <EventsClient events={events} />;
}