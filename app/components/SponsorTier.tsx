import Image from "next/image";
import { colors } from "../lib/helper";
import { Sponsor } from "../lib/type";

export default function SponsorTier({
    title,
    sponsors,
    bgColor,
}: {
    title: string;
    sponsors: Sponsor[];
    bgColor: string;
}) {
    return (
        <div className="flex flex-col items-center p-6">
            {/* <h3
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{
                    color: colors.gray,
                    fontFamily: "nunito",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
            >
                {title}
            </h3> */}

            {sponsors.length > 0 ? (
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.company_id}
                            className="rounded-full flex items-center justify-center overflow-hidden relative"
                            style={{
                                width: "10rem",
                                height: "10rem",
                                border: `6px solid ${bgColor}`,
                                backgroundColor: "white",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div className="w-4/5 h-4/5 relative">
                                <Image
                                    src={sponsor.company_logo}
                                    alt={sponsor.company_name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="rounded-full flex items-center justify-center overflow-hidden relative"
                    style={{
                        width: "10rem",
                        height: "10rem",
                        border: `6px solid ${bgColor}`,
                        backgroundColor: "white",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <span className="text-gray-400 text-sm">Coming Soon</span>
                </div>
            )}
        </div>
    );
}
