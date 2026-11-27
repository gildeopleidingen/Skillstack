

export default async function roadmap() {

        const response = await fetch( `${process.env.API_URL}/quest` );
        console.log("app/(site)/roadmap.ts -- response: ", response);

        if (!response.ok) {
                throw new Error("Failed to fetch quests");
        }
     
        const quests = await response.json();
        console.log("app/(site)/roadmap.ts -- quests: ", quests);
        
        for(let i=0; i < quests.length;i++) {
                let quest = quests[i];
                let uuid = quest.uuid;
                // get tracks
        }

        return (
                <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                                roadmap ....
                <ul>                
                {
                        quests.map(q => (
                                <li key={q.uuid}>
                                        {q.name}
                                </li>
                        ))
                }
                </ul>

                        </main>
                </div>
        );
}
