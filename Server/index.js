import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import getByDifficulty from "./routes/getByDifficulty.js";
import evaluateRoute from "./routes/evaluate.js";
import router from "./gemini/api.js"
dotenv.config();

let port = 4040

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("backend working")
});

app.use("/api/questions", getByDifficulty);
app.use("/api/evaluate", evaluateRoute);
app.use("/api/router", router)


const startServer = async () => {
    await connectDB();     // wait for DB
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

startServer();