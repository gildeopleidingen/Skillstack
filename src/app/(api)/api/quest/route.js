// quest
import 'server-only';

// authentication
import {auth} from "@/auth";
// database
import {pool} from "@/lib/pool";

// Get all the quest
export async function GET() {
  try {
        // Get user from session and hist hithub_id
        //const session = await auth();
        //const github_id = session.user.id;

        // Select only fields that are safe to return.
        const result = await pool.query(
                `SELECT * from quest;`
        );

        return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch quest:", error);
    return Response.json(
      { error: "Could not fetch quest" },
      { status: 500 }
    );
  }
}
