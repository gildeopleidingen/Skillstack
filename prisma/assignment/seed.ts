import "dotenv/config";
import { connectDB, db } from "@/lib/db";

const assignment = [
          {
                uuid:  "01a1c5e3-1289-751b-9245-7729380c79f9",
                title: "Hello World",
                description: "Tell the world you are about to code",
                  icon: "PhotoURL",
                assignment_type: "learning"
          },
        {
                uuid:  "01a1c5e3-1289-751b-9245-7729380c79d9",
                title: "Hello World C++",
                description: "Tell the world you are about to code C++",
                icon: "PhotoURL",
                assignment_type: "learning",
                tech_slug: "cpp",
        },
        {
                uuid:  "01a1c5e3-1289-751b-9245-7729380c79d8",
                title: "A1Z26 Cipher",
                description: "Program this cipher and learn about parsing, in Python",
                icon: "PhotoURL",
                assignment_type: "exercise",
                tech_slug: "python"
        },
        {
                uuid:  "01a1c5e3-1289-751b-9245-7729380c79aa",
                title: "Password Vault",
                description: "Keep passwords safe by creating a safe login functionality",
                icon: "PhotoURL",
                assignment_type: "problem"
        }
];

const assignment_test = [
        {
                uuid: "08a1c5e3-1289-751b-9245-7729380c79aa",
                assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79d9",
                name: "Printed Hello World",
                code: "INSERT UNIT TEST CODE HERE"
        },
        {
                uuid: "08a1c5e3-1289-751b-9245-7729380c79ab",
                assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79d9",
                name: "Filled in name printed",
                code: "INSERT UNIT TEST CODE HERE"
        },
        {
                uuid: "08a1c5e3-1289-751b-9245-7729380c79ac",
                assignment_uuid: "01a1c5e3-1289-751b-9245-7729380c79d9",
                name: "Input filters remove whitespace",
                code: "INSERT UNIT TEST CODE HERE"
        },
]

export default async function assignmentSeed(): Promise<void> {
        await connectDB();

        for (const d of assignment) {
                await db.assignment.upsert({
                        where: { uuid: d.uuid },
                        create: d,
                        update: {},
                });
        }

        for (const d of assignment_test) {
                await db.assignment_test.upsert({
                        where: { uuid: d.uuid },
                        create: d,
                        update: {},
                });
        }


}