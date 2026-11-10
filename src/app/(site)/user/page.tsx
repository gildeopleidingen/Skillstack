
import { db, connectDB } from "@/lib/db";

export default async function user() {
        
        await connectDB();

        const users = await db.user.findMany();
        
        return (
                <main>
                        <h1>Users</h1>
                        <a href="\">Home</a>
                        <ul>
                        {
                                users.map( (user) => (
                                        <li key={user.github_id}>{user.email}</li>
                                ))
                        }
                        </ul>
                </main>
        );
}
