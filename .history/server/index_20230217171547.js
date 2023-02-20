import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import { file } from "file"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async(res, req) => {
    res.setEncoding(" ");
})

const startServer = async() => {
    app.listen(5000, () => console.log("Server has started on port http://localhost:5000"));

}
startServer();