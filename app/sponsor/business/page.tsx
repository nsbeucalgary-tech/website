import { Metadata } from "next";
import BusinessSponsorsClient from "./components/BusinessClient";
import { getAllBusinessSponsors } from "@/app/lib/businessSponsorCalls";
export const metadata: Metadata = {
    title: "Sponsor - Business",
    description:
        "Check out the discounts from our sponsor business",
};
export default async function BusinessPage() {
const businessSponsors = await getAllBusinessSponsors();
    return <BusinessSponsorsClient businessSponsors={businessSponsors} />;
}
