import express from "express";
import Easy from "../models/EasyQuestion.js";
import Medium from "../models/MediumQuestion.js";
import Hard from "../models/HardQuestion.js";

const router = express.Router();

router.get("/:level", async (req, res) => {
    const level = req.params.level;

    let data;

    if (level === "easy") {
        data = await Easy.find();
    } else if (level === "medium") {
        data = await Medium.find();
    } else if (level === "hard") {
        data = await Hard.find();
    }

    res.json(data);
});

export default router;