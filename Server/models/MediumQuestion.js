import mongoose from "mongoose";

const schema = new mongoose.Schema({
    questionId: Number,
    question: String,
    correctAnswer: String,
    difficulty: String
});

export default mongoose.model( "mediumquestions",schema);