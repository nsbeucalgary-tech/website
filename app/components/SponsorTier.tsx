import Image from "next/image";
import { colors } from "../lib/helper";

interface Sponsor {
    id: number;
    name: string;
    url: string;
    tier: string;
}

interface SponsorTierProps {
    title: string;
    sponsors: Sponsor[];
    bgColor: string;
}

export default function SponsorTier({
    title,
    sponsors,
    bgColor,
}: SponsorTierProps) {
    return (
        <div className="flex flex-col items-center p-6">
            <h3
                className="text-2xl sm:text-3xl font-bold mb-6"
                style={{
                    color: colors.black,
                    fontFamily: "nunito",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
            >
                {title}
            </h3>
            <div
                className="rounded-full flex items-center justify-center overflow-hidden relative"
                style={{
                    width: "15rem",
                    height: "15rem",
                    backgroundColor: bgColor,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
            >
                {sponsors.length > 0 ? (
                    <div className="w-4/5 h-4/5 relative">
                        <Image
                            src={sponsors[0].url}
                            alt={sponsors[0].name}
                            fill
                            className="object-contain"
                        />
                    </div>
                ) : (
                    <span className="text-gray-400 text-sm">Coming Soon</span>
                )}
            </div>
        </div>
    );
}
