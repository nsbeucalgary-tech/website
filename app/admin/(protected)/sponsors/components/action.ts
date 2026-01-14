"use server";
import { addSponsor, deleteSponsor, updateSponsor } from "@/app/lib/sponsorCall";
import { NewSponsor } from "@/app/lib/type";
import { revalidatePath } from "next/cache";

export async function createSponsorAction(data: NewSponsor) {
    await addSponsor(data);
    revalidatePath("/admin/sponsors");
}

export async function editSponsorAction(sponsor_id: number, data: Partial<NewSponsor>) {
    await updateSponsor(sponsor_id, data);
    revalidatePath("/admin/sponsors");
}

export async function deleteSponsorAction(sponsorId: number) {
    await deleteSponsor(sponsorId);
    revalidatePath("/admin/sponsors");
}
