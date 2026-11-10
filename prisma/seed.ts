import assignmentSeed from "./assignment/seed";
import userSeed from "./user/seed";
import submissionSeed from "./submission/seed";

async function seed() {
        await userSeed();
        await assignmentSeed();
        await submissionSeed();
}

seed();