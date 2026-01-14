import { getAllExecs } from "../lib/execCall";
import TeamClient from "./components/TeamClient";

export const dynamic = "force-dynamic";


export default async function TeamPage() {
    const execs = await getAllExecs();

    return <TeamClient execs={execs} />;
}
