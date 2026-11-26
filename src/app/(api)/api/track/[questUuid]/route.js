// track
import 'server-only';

/**
 * a track is part of a quest and has paths
 */

// authentication
import {auth} from "@/auth";
// database
import {pool} from "@/lib/pool";

// Get all the tracks from a quest
// Endpoint: /api/track/4  
export async function GET(request, {params}) {
  try {
        // Get user from session and hist hithub_id
        //const session = await auth();
        //const github_id = session.user.id;
        const {questUuid} = await params;
        // const questUuid = new URL(request.url).pathname.split("/").pop();
        if(!questUuid || questUuid < 0) {
                return Response.json(
                      { error: "Please provide a questUuid"}, {status: 203}
                )
        }

        // Select only fields that are safe to return.
        const result = await pool.query(
                `SELECT * from track WHERE quest_uuid=$1;`, [questUuid]
        );

        return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch tracks:", error);
    return Response.json(
      { error: "Could not fetch tracks" },
      { status: 500 }
    );
  }
}
