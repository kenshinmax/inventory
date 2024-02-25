const mongoose = require("mongoose");
//const url = 'mongodb://mongodb-myapp:27017/mongodb'
const url = process.env.MONGO_URI;
mongoose.set("strictQuery", false);

const connectDb = () => {
    try {
        mongoose.connect(url)
        console.log('....db connected...')
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    const connection = mongoose.createConnection(
        url, {
        user: 'user',
        pass: 'pass',
    })
    

}

module.exports = connectDb;