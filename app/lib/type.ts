export interface Event {
    event_id: number;
    event_name: string;
    event_location: string;
    event_time: string;
    event_description: string;
    event_poster: string;
    is_important: boolean;
    event_link?: string | null;
}

export type NewEvent = Omit<Event, "event_id">;
