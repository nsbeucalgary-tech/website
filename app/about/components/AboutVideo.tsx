"use client";

import React, { useRef, useEffect, useState } from "react";

const AboutVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (entry.isIntersecting && !hasPlayed) {
                if (videoRef.current) {
                    videoRef.current
                        .play()
                        .catch((err) =>
                            console.error("Error playing video:", err)
                        );
                }
                setHasPlayed(true);
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });
        if (videoRef.current) observer.observe(videoRef.current);
    }, [hasPlayed]);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {/* Uncomment below for video */}
            <video ref={videoRef} className="w-full rounded-lg" muted>
                <source src="/Untitled_design.mp4" type="video/mp4" />
            </video>

            {/* <img
                src="/AboutUsPhoto.png"
                alt="About Us"
                className="w-full max-w-full rounded-lg object-cover"
            /> */}
        </div>
    );
};

export default AboutVideo;
