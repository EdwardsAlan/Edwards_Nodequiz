/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/

const mongoose = require('mongoose');

let summarySchema = mongoose.Schema({
  employeeId: String,
      quizId: String,
      quizName: String,
      dateTaken:String,
      score: String

});

module.exports = mongoose.model('Summary', summarySchema);