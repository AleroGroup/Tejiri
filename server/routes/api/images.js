const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//Get the post ( images )
router.get('/', async (req, res) => {
    const images = await loadImageCollection();
    res.send(await images.find({}).toArray());
});


//collections

async function loadImageCollection() {
    const url = 'mongodb://alero:QOVaNdVMYl2kVLE5@cluster0-shard-00-00-lc4j1.mongodb.net:27017,cluster0-shard-00-01-lc4j1.mongodb.net:27017,cluster0-shard-00-02-lc4j1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
    const client = await mongodb.MongoClient.connect(url, {
        useNewUrlParser: true
    });

    return client.db('visual_content').collection('images');
}

module.exports = router;