import { Metadata } from "next";
import GetInvolvedClient from "./components/GetInvolvedClient";
export const metadata: Metadata = {
    title: "Get Involved",
    description: "Join our mission. Build community. Create impact.",
};
export default function GetInvolvedPage() {
    return <GetInvolvedClient />;
}