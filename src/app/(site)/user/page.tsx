
export default async function user() {
        // this is with DB way, but we want to use the API
        //await connectDB();

        //const users = await db.user.findMany();
        const response = await fetch(`${process.env.API_URL}/user`, {
                cache: "no-store", // fetch fresh data on each request
        });

        console.log(response);

        if (!response.ok) {
                throw new Error("Failed to fetch users");
        }

        const users = await response.json();

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
