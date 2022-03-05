require('dotenv').config();
import faker from "@faker-js/faker"

faker.seed(19);

export async function seed() {

}

export const run = async () => {
    try {
        await seed()
        process.exit(0)
    } catch (e) {
        console.error(e);
        process.exit(1)
    } finally {
    }
};

if (require.main === module) {
    run();
}
