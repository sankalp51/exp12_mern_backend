const mongoose = require('mongoose');
const db = "mongodb://127.0.0.1:27017/Booksdb";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;