import { getAllExecs } from "../lib/execCall";
import TeamClient from "./components/TeamClient";

export default async function TeamPage() {
    const execs = await getAllExecs();

    return <TeamClient execs={execs} />;
}
