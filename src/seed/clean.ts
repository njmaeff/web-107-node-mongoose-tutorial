require('dotenv').config();
import {connect} from "../connect";


export async function clean() {
    const {connection} = await connect();
    await connection.db.dropDatabase()
}

const run = async () => {
    try {
        await clean()
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
