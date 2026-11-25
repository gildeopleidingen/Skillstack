// userLanguages
// assignment_category
import 'server-only';

import {auth} from "@/auth";
import {pool} from "@/lib/pool";

// Get all the assignment_categories for a user
export async function GET() {
  try {
        // Get user from session and hist hithub_id
        const session = await auth();
        const github_id = session.user.id;

        // Select only fields that are safe to return.
        const result = await pool.query(
                `SELECT ac.id, ac.name, ac.icon, ac.type FROM assignment_category as ac LEFT JOIN user_assignment_category as ua ON ac.id=ua.assignment_category_id WHERE ua.user_github_id= $1;`, [github_id]
        );

        return Response.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return Response.json(
      { error: "Could not fetch user assignment_categories" },
      { status: 500 }
    );
  }
}

// TODO store languages per user
export async function POST() {

}

