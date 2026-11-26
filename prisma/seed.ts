import assignmentSeed from "./assignment/seed";
import userSeed from "./user/seed";
import submissionSeed from "./submission/seed";
import techSeed from "./tech/seed";
import questSeed from "./quest/seed";

async function seed() {
        await techSeed();
        await userSeed();
        await assignmentSeed();
        await submissionSeed();
        await questSeed();
}

seed();