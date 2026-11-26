import "dotenv/config";
import { connectDB, db } from "@/lib/db";

const quest = [
  {
          uuid: "e1a1c5e3-1289-751b-9245-7729380c79f8",
          name: "Hello programmer quest",
  },
];

const track = [
        {
                uuid: "e1a1c5e2-1289-751b-9245-7729380c79f8",
                name: "Hello programmer lvl1",
                quest_uuid: "e1a1c5e3-1289-751b-9245-7729380c79f8",
                order: 1
        },
        {
                uuid: "e1a1c5e2-1289-751b-9245-7729380c79f9",
                name: "Hello programmer lvl2",
                quest_uuid: "e1a1c5e3-1289-751b-9245-7729380c79f8",
                order: 2
        },
];

const path = [
        {
                uuid: "c4a1c5e2-1289-751b-9245-7729380c79f9",
                track_uuid: "e1a1c5e2-1289-751b-9245-7729380c79f8",
                assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79d9",
                order: 1
        },
        {
                uuid: "c4a1c5e2-1289-751b-9245-7729380c79f9",
                track_uuid: "e1a1c5e2-1289-751b-9245-7729380c79f8",
                assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79d8",
                order: 2
        },
];

export default async function questSeed(): Promise<void> {
        await connectDB();
        for (const d of quest) {
          await db.quest.upsert({
            where: { uuid: d.uuid },
            create: d,
            update: {},
          });
        }

        for (const d of track) {
                await db.track.upsert({
                        where: { uuid: d.uuid },
                        create: d,
                        update: {},
                });
        }

        for (const d of path) {
                await db.path.upsert({
                        where: { uuid: d.uuid },
                        create: d,
                        update: {},
                });
        }
}
