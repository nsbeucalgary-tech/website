import { colors } from "../lib/helper";
import { Sponsor } from "../lib/type";
import SponsorTier from "./SponsorTier";

export default function SponsorsSection({ sponsors }: { sponsors: Sponsor[] }) {
    const platinum = sponsors.filter((s) => s.company_status === 0);
    const gold = sponsors.filter((s) => s.company_status === 1);
    const silver = sponsors.filter((s) => s.company_status === 2);
    const bronze = sponsors.filter((s) => s.company_status === 3);

    return (
        <div className="w-full py-16" style={{ backgroundColor: colors.black }}>
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
                <p className="text-center" style={{ color: colors.gray }}>
                    We are proud to partner with organizations that support our
                    mission.
                </p>

                <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto justify-center items-start">
                    {platinum.length > 0 && (
                        <SponsorTier
                            title="PLATINUM SPONSORS"
                            sponsors={platinum}
                            bgColor="#E5E4E2"
                        />
                    )}
                    {gold.length > 0 && (
                        <SponsorTier
                            title="GOLD SPONSORS"
                            sponsors={gold}
                            bgColor="#FFD700"
                        />
                    )}
                    {silver.length > 0 && (
                        <SponsorTier
                            title="SILVER SPONSORS"
                            sponsors={silver}
                            bgColor="#C0C0C0"
                        />
                    )}
                    {bronze.length > 0 && (
                        <SponsorTier
                            title="BRONZE SPONSORS"
                            sponsors={bronze}
                            bgColor="#CD7F32"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
