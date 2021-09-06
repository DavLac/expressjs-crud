const {MongoClient} = require('mongodb');

const uri = "mongodb://root:password@localhost:27017";
const client = new MongoClient(uri);

async function connect() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

    } catch (e) {
        console.error(e);
    }
}

function getUserCollection() {
    const db = client.db('main');
    return db.collection('users');
}

module.exports = {
    initDb: function () {
        connect()
            .then(client => {
                console.log('Connected to Database');
            })
            .catch(console.error);
    },
    userCol: getUserCollection
};
