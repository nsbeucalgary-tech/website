"use server";

import { addEvent, updateEvent, deleteEvent } from "@/app/lib/eventCall";
import { NewEvent } from "@/app/lib/type";
import { revalidatePath } from "next/cache";

export async function createEventAction(data: NewEvent) {
    await addEvent(data);
    revalidatePath("/admin/events");
}

export async function editEventAction(
    event_id: number,
    data: Partial<NewEvent>
) {
    await updateEvent(event_id, data);
    revalidatePath("/admin/events");
}

export async function deleteEventAction(eventId: number) {
    await deleteEvent(eventId);
    revalidatePath("/admin/events");
}
