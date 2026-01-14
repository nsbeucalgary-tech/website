import { colors } from "@/app/lib/helper";
import { Sponsor } from "@/app/lib/type";
import { Star } from "lucide-react";

export default function AdminSponsorTier({
    title,
    sponsors: sectionSponsors,
    color,
    SponsorCard,
}: {
    title: string;
    sponsors: Sponsor[];
    color: string;
    SponsorCard: React.ComponentType<{ sponsor: Sponsor }>;
}) {
    if (sectionSponsors.length === 0) return null;

    return (
        <div>
            <h2
                className="text-2xl font-bold mb-6 flex items-center gap-2"
                style={{
                    color: colors.black,
                    fontFamily: "impact, sans-serif",
                }}
            >
                <Star className="w-6 h-6" fill={color} style={{ color }} />
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sectionSponsors.map((sponsor) => (
                    <SponsorCard key={sponsor.company_id} sponsor={sponsor} />
                ))}
            </div>
        </div>
    );
};
