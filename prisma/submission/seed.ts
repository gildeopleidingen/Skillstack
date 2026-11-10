import "dotenv/config";
import { connectDB, db } from "@/lib/db";

const data = [
  {
          uuid: "01a1c5e3-1289-751b-9245-7729380c79f8",
          user_id: 1,
          assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79f9",

  },
];

export default async function submissionSeed(): Promise<void> {
        await connectDB();
        for (const d of data) {
          await db.submission.upsert({
            where: { uuid: d.uuid },
            create: d,
            update: {},
          });
        }
}
