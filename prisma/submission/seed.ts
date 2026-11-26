import "dotenv/config";
import { connectDB, db } from "@/lib/db";

const date = new Date();

const data = [
  {
          uuid: "01a1c5e3-1289-751b-9245-7729380c78a1",
          user_id: 1,
          assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79d9",
          submitted_code: "#include <string>"
  },
        {
                uuid: "01a1c5e3-1289-751b-9245-7729380c78a2",
                user_id: 2,
                assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79d9",
                submitted_code: "#include <string> std::cout << \" Hello World, Bob! \"",
                completed_at: date.toISOString()
        }
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
