import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateHint = async (question, table) => {
    try {

        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const prompt = `
You are an SQL tutor.

Question:
${question}

Table:
${JSON.stringify(table)}

Give a short SQL hint only.
Do NOT give the full answer.
Just guide the user.
`;

        const result = await model.generateContent(prompt);

        return result.response.text();

    } catch (err) {
        console.log("Gemini Error:", err);
        return "Hint generation failed.";
    }
};

router.post("/", async (req, res) => {

    try {

        const { question, table } = req.body;

        console.log("Hint request received");

        const hint = await generateHint(question, table);

        res.json({ hint });

    } catch (err) {
        console.log("Route Error:", err);
        res.json({ hint: "Something went wrong" });
    }

});


export default router;