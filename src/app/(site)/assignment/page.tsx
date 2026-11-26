import { db, connectDB } from "@/lib/db";

export default async function assignment() {

        // await connectDB();
  
        // const assignments = await db.assignment.findMany();
        // console.log('assignments from DB: ', assignment);

        const response = await fetch(`${process.env.API_URL}/assignment/1`, {
                cache: "no-store", // fetch fresh data on each request
        });

        console.log('app/(site)/assignment/page.tsx -- response: ', response);

        if (!response.ok) {
                throw new Error("Failed to fetch users");
        }

        const assignments = await response.json();


        return (
                <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                                List of assessments form DB
                                <a href="\">Home</a>
                                <ul>
                                {
                                assignments.map( (a) => (
                                        <li key={a.uuid}>{a.title}</li>
                                ))
                                }
                                </ul>
                        </main>
                </div>
        );
}
