require('dotenv').config();
import {Blog} from "../models/blog";
import faker from "@faker-js/faker"
import range from "lodash/range"
import capitalize from "lodash/capitalize"
import {connect} from "../connect";

faker.seed(19);

export async function seed() {
    await connect()
    await Promise.all(range(15).map(() => {
        const _id = faker.datatype.hexaDecimal(24).slice(2);
        return new Blog({
            _id,
            author: `${faker.name.firstName()} ${faker.name.lastName()}`,
            title: capitalize(faker.lorem.words(3)),
            content: faker.lorem.paragraphs(3),
        }).save()
    }));

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
