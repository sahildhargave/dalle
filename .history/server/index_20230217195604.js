import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import pkg from 'file';
const { file } = pkg;
import connectDB from "./mongodb/connect.js";
dotenv.config();

const app = express();
app.use(cors());
const { MONGODB_URL } = process.env;
app.use(express.json({ limit: '50mb' }));

app.get('/', async(req, res) => {
    res.send("Hello ");
})

const startServer = async() => {
    try {
        connectDB(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,


        });
        app.listen(500, () => console.log("Server has started on port http://localhost:500"));

    } catch (error) {
        console.log(error);
    }
}
startServer();