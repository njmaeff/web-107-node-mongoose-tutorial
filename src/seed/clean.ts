require('dotenv').config();

export async function clean() {

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
