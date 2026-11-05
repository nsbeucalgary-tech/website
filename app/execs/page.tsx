import type { Metadata } from "next";
import Image from "next/image";

const teams = [
    {
        title: "Presidents",
        names: "Dami Anifowose · Kambi Obodo",
        image: "/execs/exec-team-02.jpg",
    },
    {
        title: "Senators",
        names: "Muna Obodo · Dami Olawuwo",
        image: "/execs/exec-team-03.jpg",
    },
    {
        title: "Programs",
        names: "Demilade Awe · Olivia Ikeri · Rachel Ojo",
        image: "/execs/exec-team-04.jpg",
    },
    {
        title: "Sponsorship & Outreach",
        names: "Abdisa Abdella · Renata Ibe · Ini Ogun · Toluwanimi Aribifo",
        image: "/execs/exec-team-05.jpg",
    },
    {
        title: "Technology",
        names: "Joel Obinna Eze · Favour Iheanyichukwu · Wilson Aborowa",
        image: "/execs/exec-team-06.jpg",
    },
    {
        title: "Public Relations",
        names: "Eniola Omoniyi · Funbi Fasuba · Dami Akintunde",
        image: "/execs/exec-team-07.jpg",
    },
    {
        title: "Chairs",
        names: "Mercy Ajagbe · Erioluwa Olubadejo · Chinaza Eyinnaya-Okidi",
        image: "/execs/exec-team-08.jpg",
    },
];

export const metadata: Metadata = {
    title: "2026/2027 Executive Team",
    description: "Meet the 2026/2027 NSBE UCalgary executive team.",
};

export default function ExecsPage() {
    return (
        <div className="bg-[#f5f1e8] text-black">
            <section className="bg-black px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                    <div className="pb-2">
                        <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#fdf152]">
                            NSBE UCalgary · 2026/2027
                        </p>
                        <h1 className="max-w-xl font-serif text-5xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                            Meet the execs.
                        </h1>
                        <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
                            The team building community, creating opportunities,
                            and moving Black excellence in engineering forward.
                        </p>
                    </div>

                    <Image
                        src="/execs/exec-team-01.jpg"
                        alt="The 2026/2027 NSBE UCalgary executive team"
                        width={1080}
                        height={757}
                        priority
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="h-auto w-full border border-white/20 object-cover"
                    />
                </div>
            </section>

            <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col justify-between gap-4 border-b border-black/20 pb-6 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#15803d]">
                                Our leadership
                            </p>
                            <h2 className="mt-2 font-serif text-4xl sm:text-5xl">
                                The 2026/2027 team
                            </h2>
                        </div>
                        <p className="max-w-md text-sm leading-6 text-black/60 sm:text-right">
                            New team. New season. Same mission. Photography and
                            editing by @nasi.ze.
                        </p>
                    </div>

                    <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
                        {teams.map((team) => (
                            <figure key={team.title}>
                                <Image
                                    src={team.image}
                                    alt={`${team.title}: ${team.names}`}
                                    width={1080}
                                    height={756}
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="aspect-[10/7] w-full bg-black object-cover"
                                />
                                <figcaption className="border-t-4 border-[#2bb463] bg-white px-5 py-4">
                                    <h3 className="font-serif text-2xl">
                                        {team.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-black/60">
                                        {team.names}
                                    </p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <aside className="mt-14 border-l-4 border-[#fdf152] bg-black px-6 py-6 text-white sm:px-8">
                        <h2 className="font-serif text-2xl">Also on the team</h2>
                        <p className="mt-3 leading-7 text-white/70">
                            Mouram Sirelkhatim, Public Relations Chair · Will
                            Adebiyi, Membership Coordinator · Ishimwe Kamana,
                            Graduate Liaison
                        </p>
                    </aside>
                </div>
            </section>
        </div>
    );
}
