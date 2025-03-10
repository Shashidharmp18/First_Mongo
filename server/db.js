const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://shashidharpatgar8:Shashi@cluster0.7bzl5.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log(`MongoDB connected successfull`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;