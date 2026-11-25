import {pool} from "@/lib/pool";

export async function GET() {
  try {
    // Select only fields that are safe to return.
    const result = await pool.query(
      "SELECT github_id, email FROM public.user ORDER BY github_id;"
    );

    return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return Response.json(
      { error: "Could not fetch users" },
      { status: 500 }
    );
  }
}
