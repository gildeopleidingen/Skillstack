import "dotenv/config";
import { connectDB, db } from "@/lib/db";

const data = [
  {
    uuid:  "01a1c5e3-1289-751b-9245-7729380c79f9",
    title: "Hello World",
    description: "Tell the world you are about to code",
          assignment_category_id: 1
  },
];

const category = [{
        id: 1,
        name: "C++",
        icon: "PhotoURL",
        type: "cpp",
}]

export default async function assignmentSeed(): Promise<void> {
        await connectDB();

        for (const d of category) {
                await db.assignment_category.upsert({
                        where: { id: d.id },
                        create: d,
                        update: {},
                });
        }

        for (const d of data) {
          await db.assignment.upsert({
            where: { uuid: d.uuid },
            create: d,
            update: {},
          });
        }
}