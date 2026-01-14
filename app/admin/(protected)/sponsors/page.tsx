import { getAllSponsors } from "@/app/lib/sponsorCall";
import AdminSponsorClient from "./components/AdminSponsorClient";


export default async function AdminSponsorPage() {
    const sponsors = await getAllSponsors();

    return <AdminSponsorClient sponsors={sponsors} />;
}
