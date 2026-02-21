// app/lib/businessSponsorCall.ts
import { sql } from "@/app/lib/db";
import { NewBusinessSponsor, BusinessSponsor } from "@/app/lib/type";

export async function getAllBusinessSponsors(): Promise<BusinessSponsor[]> {
  const sponsors = await sql`
    SELECT *
    FROM business_sponsors;
  `;

  return sponsors as BusinessSponsor[];
}

export async function addBusinessSponsor(
  sponsor: NewBusinessSponsor
): Promise<BusinessSponsor> {
  const result = await sql`
    INSERT INTO business_sponsors (
      business_name,
      business_image,
      business_discount_text,
      business_website_link
    )
    VALUES (
      ${sponsor.business_name},
      ${sponsor.business_image},
      ${sponsor.business_discount_text},
      ${sponsor.business_website_link}
    )
    RETURNING *;
  `;

  return result[0] as BusinessSponsor;
}

export async function updateBusinessSponsor(
  business_id: number,
  fields: Partial<Omit<BusinessSponsor, "business_id">>
): Promise<BusinessSponsor> {
  const result = await sql`
    UPDATE business_sponsors
    SET
      business_name = COALESCE(${fields.business_name}, business_name),
      business_image = COALESCE(${fields.business_image}, business_image),
      business_discount_text = COALESCE(${fields.business_discount_text}, business_discount_text),
      business_website_link = COALESCE(${fields.business_website_link}, business_website_link)
    WHERE business_id = ${business_id}
    RETURNING *;
  `;

  return result[0] as BusinessSponsor;
}

export async function deleteBusinessSponsor(
  businessId: number
): Promise<void> {
  await sql`
    DELETE FROM business_sponsors
    WHERE business_id = ${businessId};
  `;
}