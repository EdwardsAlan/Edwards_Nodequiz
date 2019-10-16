/*
============================================
; Title: NodeQuiz
; Author: Professor Krasso
; Modified by: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
const mongoose = require('mongoose');

let resultSchema = mongoose.Schema({
  employeeId: String,
  quizId: String,
  result: String

});

module.exports = mongoose.model('Result', resultSchema);
