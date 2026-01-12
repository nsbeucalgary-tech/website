// app/lib/eventCall.ts
import { sql } from "@/app/lib/db";
import { Event, NewEvent } from "@/app/lib/type";

export async function getAllEvents(): Promise<Event[]> {
    const events = await sql`
        SELECT *
        FROM events
        ORDER BY event_time ASC;
    `;

    return events as Event[];
}

export async function addEvent(event: NewEvent): Promise<Event> {
    const result = await sql`
    INSERT INTO events (
      event_name,
      event_location,
      event_time,
      event_description,
      event_poster,
      is_important,
      event_link
    )
    VALUES (
      ${event.event_name},
      ${event.event_location},
      ${event.event_time},
      ${event.event_description},
      ${event.event_poster},
      ${event.is_important},
      ${event.event_link}
    )
    RETURNING *;
  `;

    return result[0] as Event;
}

export async function updateEvent(
    event_id: number,
    fields: Partial<Omit<Event, "event_id">>
): Promise<Event> {
    const result = await sql`
    UPDATE events
    SET
      event_name = COALESCE(${fields.event_name}, event_name),
      event_location = COALESCE(${fields.event_location}, event_location),
      event_time = COALESCE(${fields.event_time}, event_time),
      event_description = COALESCE(${fields.event_description}, event_description),
      event_poster = COALESCE(${fields.event_poster}, event_poster),
      is_important = COALESCE(${fields.is_important}, is_important),
        event_link = COALESCE(${fields.event_link}, event_link)
    WHERE event_id = ${event_id}
    RETURNING *;
  `;

    return result[0] as Event;
}

export async function deleteEvent(eventId: number): Promise<void> {
    await sql`
    DELETE FROM events
    WHERE event_id = ${eventId};
  `;
}
