// assignment
/**
 * Assignments are things a user can do in a path..
 * An assignment is part of a path, a path is part of a track a track is part of a learningpath
 **/
import 'server-only';

// authentication
import {auth} from "@/auth";
// database
import {pool} from "@/lib/pool";

// Get all the assignment from a path
// Endpoint: /api/assignment/4  ( 4 is path 4)
export async function GET(request, {params}) {
  try {
        // Get user from session and hist hithub_id
        //const session = await auth();
        //const github_id = session.user.id;
        const path = await params;
        //const path = new URL(request.url).pathname.split("/").pop();
        if(!path || path < 0) {
                return Response.json(
                      { error: "Please provide a path"}, {status: 203}
                )
        }

        // Select only fields that are safe to return.
        const result = await pool.query(
                `SELECT * from assignment WHERE path_id=$1;`, [path]
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
