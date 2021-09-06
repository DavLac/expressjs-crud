const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = {
    initDb: function () {
        main()
            .then(client => {
                console.log('Connected to Database')
            })
            .catch(console.error);
    }
};
