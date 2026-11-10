import "dotenv/config";
import { connectDB, db } from "@/lib/db";


const users = [
  {
          github_id: 1,
          github_username: "alice",
          full_name: "Alice",
          email: "alice@prisma.io",
          avatar_url: "AVATARURL"
  },
];

export default async function userSeed(): Promise<void> {
        await connectDB();
          for (const user of users) {
            await db.user.upsert({
              create: user,
              update: {},
              where: { email: user.email },
            });
          }
}
