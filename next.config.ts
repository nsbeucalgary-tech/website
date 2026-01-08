import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.dicebear.com",
                pathname: "/7.x/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "via.placeholder.com",
            },
            {
                protocol: "https",
                hostname: "dummyimage.com",
            },
        ],
    },
};

export default nextConfig;
