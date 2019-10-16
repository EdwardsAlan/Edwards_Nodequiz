/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let choicesSchema = new Schema({
  text: String,
  isCorrect: Boolean
})


let questionsSchema = new Schema({
  text: String,
  choices: [choicesSchema]
  
});

let quizSchema = new Schema({
  quizId: String,
  quizName: String,
  quizQuestions: [questionsSchema]
});

module.exports = mongoose.model("quiz", quizSchema, "test");
