// app/lib/sponsorCall.ts
import { sql } from "@/app/lib/db";
import { NewSponsor, Sponsor } from "@/app/lib/type";

export async function getAllSponsors(): Promise<Sponsor[]> {
    const sponsors = await sql`
        SELECT *
        FROM sponsors;
    `;

    return sponsors as Sponsor[];
}

export async function addSponsor(sponsor: NewSponsor): Promise<Sponsor> {
    const result = await sql`
    INSERT INTO sponsors (
      company_name,
      company_logo,
      company_status
    )
    VALUES (
      ${sponsor.company_name},
      ${sponsor.company_logo},
      ${sponsor.company_status}
    )
    RETURNING *;
  `;
    return result[0] as Sponsor;
}

export async function updateSponsor(
    sponsor_id: number,
    fields: Partial<Omit<Sponsor, "company_id">>
): Promise<Sponsor> {
    const result = await sql`
    UPDATE sponsors
    SET
      company_name = COALESCE(${fields.company_name}, company_name),
      company_logo = COALESCE(${fields.company_logo}, company_logo),
      company_status = COALESCE(${fields.company_status}, company_status)
    WHERE company_id = ${sponsor_id}
    RETURNING *;
  `;
    return result[0] as Sponsor;
}

export async function deleteSponsor(sponsorId: number): Promise<void> {
    await sql`
    DELETE FROM sponsors
    WHERE company_id = ${sponsorId};
  `;
}
