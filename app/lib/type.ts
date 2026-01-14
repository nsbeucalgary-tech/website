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

export interface Exec {
    exec_id: number;
    fname: string;
    lname: string;
    exec_position: number;
    exec_role: string;
    exec_ucid: bigint;
    exec_email: string;
    exec_bio: string;
    exec_link: string;
    exec_picture: string;
}

export type NewExec = Omit<Exec, "exec_id">;

export interface Sponsor {
    company_id: number;
    company_name: string;
    company_logo: string;
    company_status: number;
}

export type NewSponsor = Omit<Sponsor, "company_id">;

export interface Admin{
    admin_id: number;
    admin_username: string;
    admin_password: string;
}