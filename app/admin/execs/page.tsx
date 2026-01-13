import { getAllExecs } from "@/app/lib/execCall";
import AdminExecPage from "./components/AdminExecClient";


export default async function AdminExecsPage() {
    const execs = await getAllExecs();

    return <AdminExecPage execs={execs} />;
}
