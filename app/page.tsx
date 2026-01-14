// app/page.tsx
import HeroSection from "./components/HeroSection";
import NewsletterSection from "./components/NewsletterSection";
import SponsorsSection from "./components/SponsorsSection";
import WhatWeOffer from "./components/WhatWeOffer";
import { imageDatabase, offerItems } from "./lib/helper";
import { getAllSponsors } from "./lib/sponsorCall";
export const dynamic = "force-dynamic";

export default async function HomePage() {
    const sponsors = await getAllSponsors();
    return (
        <div className="w-screen overflow-x-hidden">
            <HeroSection images={imageDatabase.hero} />
            <WhatWeOffer items={offerItems} />
            <SponsorsSection sponsors={sponsors} />
            <NewsletterSection />
        </div>
    );
}
