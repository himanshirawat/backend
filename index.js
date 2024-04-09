import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv';
import connectDB from "./db.js";
// import userModel from "./models/userModel.js";
import router from './routes/user.js'


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', router);

app.get('/', ( req, res ) => {
    res.send({ message: 'Heyy!!' });
});

const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(8000, () => console.log('Server started'));
    } catch (error) {
        console.log(error);
    }
};

startServer();