// app/lib/execCall.ts
import { sql } from "@/app/lib/db";
import { Exec, NewExec } from "@/app/lib/type";

export async function getAllExecs(): Promise<Exec[]> {
    const execs = await sql`
        SELECT *
        FROM execs;
    `;

    return execs as Exec[];
}

export async function addExec(exec: NewExec): Promise<Exec> {
    const result = await sql`
    INSERT INTO execs (
      fname,
      lname,
      exec_position,
      exec_role,
      exec_ucid,
      exec_email,
      exec_bio,
      exec_link,
      exec_picture
    )
    VALUES (
      ${exec.fname},
      ${exec.lname},
      ${exec.exec_position},
      ${exec.exec_role},
      ${exec.exec_ucid},
      ${exec.exec_email},
      ${exec.exec_bio},
      ${exec.exec_link},
      ${exec.exec_picture}
    )
    RETURNING *;
  `;

    return result[0] as Exec;
}

export async function updateExec(
    exec_id: number,
    fields: Partial<Omit<Exec, "exec_id">>
): Promise<Exec> {
    const result = await sql`
    UPDATE execs
    SET
      fname = COALESCE(${fields.fname}, fname),
      lname = COALESCE(${fields.lname}, lname),
      exec_position = COALESCE(${fields.exec_position}, exec_position),
      exec_role = COALESCE(${fields.exec_role}, exec_role),
      exec_ucid = COALESCE(${fields.exec_ucid}, exec_ucid),
      exec_email = COALESCE(${fields.exec_email}, exec_email),
      exec_bio = COALESCE(${fields.exec_bio}, exec_bio),
      exec_link = COALESCE(${fields.exec_link}, exec_link),
      exec_picture = COALESCE(${fields.exec_picture}, exec_picture)
    WHERE exec_id = ${exec_id}
    RETURNING *;
  `;

    return result[0] as Exec;
}

export async function deleteExec(execId: number): Promise<void> {
    await sql`
    DELETE FROM execs
    WHERE exec_id = ${execId};
  `;
}
