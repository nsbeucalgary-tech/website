import { getAllEvents } from "../lib/eventCall";
import EventsClient from "./components/EventClient";

export default async function EventsPage() {
    const events = await getAllEvents();

    return <EventsClient events={events} />;
}