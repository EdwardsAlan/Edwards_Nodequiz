
/*
; Author: Professor Krasso
; Modified by: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeResultsSchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
  quizName: { type: Schema.Types.ObjectId, ref: "EmployeeHistory" },
  date: { type: String },
  score: { type: Number }
});

let employeeHistorySchema = new Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee" },
  quiz_Name: { type: String },
  employeeQuizResults: [employeeResultsSchema]
});

let employeeSchema = new Schema({
  employeeId: { type: String, required: true },
  userName: { type: String },
  employeeQuizHistory: [employeeHistorySchema]
});

module.exports = mongoose.model("Employee", employeeSchema);