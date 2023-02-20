import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import pkg from 'file';
const { file } = pkg;

import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";


import connectDB from "./mongodb/connect.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalle);


app.get('/', async(req, res) => {
    res.send("Hello ");
})

const startServer = async() => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(500, () => console.log("Server has started on port http://localhost:500"));

    } catch (error) {
        console.log(error);
    }
}
startServer();