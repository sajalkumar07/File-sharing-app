import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSSWORD = process.env.DB_PASSWORD;

const DBConnection = async () => {
    const MONGODB_URI = `mongodb+srv://radical2k1:KgNwhFh5HNHAUfwf@cluster0.yu52msl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with database', error.message);
    }
}

export default DBConnection;