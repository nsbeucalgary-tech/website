// app/page.tsx
import HeroSection from "./components/HeroSection";
import NewsletterSection from "./components/NewsletterSection";
import SponsorsSection from "./components/SponsorsSection";
import WhatWeOffer from "./components/WhatWeOffer";
import { imageDatabase, offerItems } from "./lib/helper";

export default function HomePage() {
    return (
        <div className="w-screen overflow-x-hidden">
            <HeroSection images={imageDatabase.hero} />
            <WhatWeOffer items={offerItems} />
            <SponsorsSection sponsors={imageDatabase.sponsors} />
            <NewsletterSection />
        </div>
    );
}
