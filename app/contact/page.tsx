import { Metadata } from "next";
import ContactClient from "./components/ContactClient";
export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Have questions, suggestions, or feedback? We'd love to hear from you!",
};
export default function ContactPage() {
    return <ContactClient />;
}
