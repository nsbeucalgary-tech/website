import { Metadata } from "next";
import { getAllExecs } from "../lib/execCall";
import TeamClient from "./components/TeamClient";
export const metadata: Metadata = {
    title: "Our Team",
    description: "Meet the dedicated leaders driving NSBE UCalgary forward.",
};
export const dynamic = "force-dynamic";


export default async function TeamPage() {
    const execs = await getAllExecs();

    return <TeamClient execs={execs} />;
}
