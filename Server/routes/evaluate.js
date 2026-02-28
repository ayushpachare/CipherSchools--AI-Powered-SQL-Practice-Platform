import express from "express";
import Easy from "../models/EasyQuestion.js";
import Medium from "../models/MediumQuestion.js";
import Hard from "../models/HardQuestion.js";

const router = express.Router();

router.post("/", async (req, res) => {

    const { questionId, userQuery, difficulty } = req.body;

    console.log("BODY:", req.body);

    let correct;

    if (difficulty === "Easy") {
        correct = await Easy.findOne({ questionId });
    }
    else if (difficulty === "Medium") {
        correct = await Medium.findOne({ questionId });
    }
    else if (difficulty === "Hard") {
        correct = await Hard.findOne({ questionId });
    }

    if (!correct) {
        return res.json({ result: "Question not found ❌" });
    }

   const normalize = (query) => {
  return query
    .toLowerCase()
    .replace(/;/g, "")
    .replace(/\s+/g, "");
};

const cleanUser = normalize(userQuery);
const cleanCorrect = normalize(correct.correctAnswer);
console.log(cleanUser)
console.log(cleanCorrect);

if (cleanUser === cleanCorrect) {

    res.json({
        correct: true
    });
    console.log("right");
    

} else {

    res.json({
        correct: false
    });

}
});

export default router;