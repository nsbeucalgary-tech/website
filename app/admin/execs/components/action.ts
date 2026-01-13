"use server";
import { addExec, deleteExec, updateExec } from "@/app/lib/execCall";
import { NewExec } from "@/app/lib/type";
import { revalidatePath } from "next/cache";

export async function createExecAction(data: NewExec) {
    await addExec(data);
    revalidatePath("/admin/execs");
}

export async function editExecAction(exec_id: number, data: Partial<NewExec>) {
    await updateExec(exec_id, data);
    revalidatePath("/admin/execs");
}

export async function deleteExecAction(execId: number) {
    await deleteExec(execId);
    revalidatePath("/admin/execs");
}
