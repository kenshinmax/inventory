const mongoose = require('mongooese')

const url = 'mongo://mongo:27017/docker-node-mongo';

const connectDb = () => {
    mongoose.connect(url, () => {
        console.log(' ... Connected to MongoDB .... ')
    })
}

module.exports = connectDb;