import { colors } from "../lib/helper";
import SponsorTier from "./SponsorTier";

interface Sponsor {
    id: number;
    name: string;
    url: string;
    tier: "platinum" | "gold" | "silver" | "bronze";
}

interface SponsorsData {
    platinum: Sponsor[];
    gold: Sponsor[];
    silver: Sponsor[];
    bronze: Sponsor[];
}

interface SponsorsSectionProps {
    sponsors: SponsorsData;
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
    return (
        <div
            className="w-full py-16"
            style={{ backgroundColor: colors.black }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    className="text-4xl sm:text-6xl font-extrabold text-center mb-4"
                    style={{
                        color: colors.primary,
                        fontFamily: "impact",
                        textShadow: `2px 2px 6px ${colors.yellow}`,
                    }}
                >
                    OUR SPONSORS
                </h2>
                <p className="text-center mb-12" style={{ color: colors.gray }}>
                    We are proud to partner with organizations that support our
                    mission.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <SponsorTier
                        title="PLATINUM SPONSORS"
                        sponsors={sponsors.platinum}
                        bgColor="#E5E4E2"
                    />
                    <SponsorTier
                        title="GOLD SPONSORS"
                        sponsors={sponsors.gold}
                        bgColor="#FFD700"
                    />
                    <SponsorTier
                        title="SILVER SPONSORS"
                        sponsors={sponsors.silver}
                        bgColor="#C0C0C0"
                    />
                    <SponsorTier
                        title="BRONZE SPONSORS"
                        sponsors={sponsors.bronze}
                        bgColor="#CD7F32"
                    />
                </div>
            </div>
        </div>
    );
}
