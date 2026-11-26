import "dotenv/config";
import { connectDB, db } from "@/lib/db";

const tech = [
        {
                slug: "python",
                name: "Python",
        },
        {
                slug: "cpp",
                name: "C++"
        },
        {
                slug: "objective-c",
                name: "Objective C",
        }
];

export default async function techSeed(): Promise<void> {
        await connectDB();
        for (const d of tech) {
          await db.tech.upsert({
            where: { slug: d.slug },
            create: d,
            update: {},
          });
        }
}
