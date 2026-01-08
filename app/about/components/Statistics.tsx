import React, { useEffect, useState } from "react";
import { colors } from "@/app/lib/helper";

const stats = [
    { id: 1, value: 515, label: "Active Chapters" },
    { id: 2, value: 24000, label: "Active Members" },
    { id: 3, value: 20, label: "Countries Across the World" },
];

const Statistics: React.FC = () => {
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

    useEffect(() => {
        const duration = 1200;
        const startTime = performance.now();

        const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

            setCounts(stats.map((stat) => Math.floor(stat.value * eased)));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 w-full">
            {stats.map((stat, index) => (
                <div key={stat.id} className="flex flex-col items-center">
                    <p
                        className="text-5xl md:text-6xl font-extrabold mb-2"
                        style={{
                            color: colors.primary,
                            fontFamily: "impact, sans-serif",
                        }}
                    >
                        {counts[index].toLocaleString()}
                    </p>
                    <p
                        className="text-base md:text-lg text-center"
                        style={{
                            color: colors.black,
                            opacity: 0.75,
                            fontFamily: "nunito, sans-serif",
                        }}
                    >
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Statistics;
