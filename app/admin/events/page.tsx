import AdminEventsClient from "./components/AdminEventClient";
import { getAllEvents } from "@/app/lib/eventCall";

export default async function AdminEventsPage() {
    const events = await getAllEvents();

    return (
        <AdminEventsClient events={events} />
    );
}
