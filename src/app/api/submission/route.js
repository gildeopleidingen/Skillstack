// submission
import 'server-only';

// authentication
import {auth} from "@/auth";
// database
import {pool} from "@/lib/pool";

// Get all the submissions from a path
// Endpoint: /api/track/4  
export async function GET(request) {
  try {
        // Get user from session and hist hithub_id
        //const session = await auth();
        //const github_id = session.user.id;
        const learningpath = new URL(request.url).pathname.split("/").pop();
        if(!learningpath || learningpath < 0) {
                return Response.json(
                      { error: "Please provide a learningpath"}, {status: 203}
                )
        }

        // Select only fields that are safe to return.
        const result = await pool.query(
                `SELECT * from track WHERE learningpath_id=$1;`, [learningpath]
        );

        return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return Response.json(
      { error: "Could not fetch tracks" },
      { status: 500 }
    );
  }
}
