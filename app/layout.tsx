import CatchUpPopup from "./CatchUpPopup";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { getAllEvents } from "./lib/eventCall";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
    }) {
    const events = await getAllEvents();
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
