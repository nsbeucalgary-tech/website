import CatchUpPopup from "./CatchUpPopup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { getEvents } from "./events/page";
import "./globals.css";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
    }) {
    const events = await getEvents();
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Navbar />

                <main className="flex-1">
                    <CatchUpPopup events={events} />
                    {children}
                </main>

                <Footer />
            </body>
        </html>
    );
}
