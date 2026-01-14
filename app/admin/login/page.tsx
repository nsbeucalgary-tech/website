import AdminLoginForm from "./components/AdminLoginForm";
import { colors } from "@/app/lib/helper";

export default function AdminLoginPage() {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{
                background: `linear-gradient(135deg, ${colors.black} 0%, ${colors.primary} 100%)`,
            }}
        >
            <AdminLoginForm />
        </div>
    );
}
