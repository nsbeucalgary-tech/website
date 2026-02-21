import { Metadata } from "next";
import AcademicClient from "./components/AcademicClient";
import { getAllSponsors } from "@/app/lib/sponsorCall";
export const metadata: Metadata = {
    title: "Sponsor - Academic",
    description: "Check out our academic sponsors",
};
export default async function AcademicPage() {
    const sponsors = await getAllSponsors();
    return <AcademicClient sponsors={sponsors} />;
}
