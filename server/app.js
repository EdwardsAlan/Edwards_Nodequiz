/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const Employee = require("./db-models/employee");
const quiz  = require("./db-models/tests");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../dist/nodequiz")));
app.use("/", express.static(path.join(__dirname, "../dist/nodequiz")));

// Global variables
const serverPort = process.env.PORT || 3000; // server port


// MongoDB connection string
const connString =
  "mongodb+srv://admin:admin@cluster0-vnfpj.mongodb.net/NodeQuiz?retryWrites=true&w=majority";

/************************* Mongoose connection strings go below this line  ***************/
mongoose
  .connect(connString, {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.debug("Connection to the Database instance was successful")
  )
  .catch(err => console.debug("MongoDB Error: " + err.message));

/************************* API routes go below this line ********************/

app.get("/api/employees/:id", function(req, res, next) {
  let employeeId = req.params.id;
  Employee.findOne({ employeeId: req.params.id  }, function(err, employee) {
    if (err) {
      console.log(err);
      //return next(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  });
});
app.post('/api/summary',function(req,res,next){
  const summary={
    employeeId:req.body.employeeId,
    quizId:req.body.quizId,
    score:req.body.score
  }

  
summary.create(summary,function(err,summary){
  if(err){
    console.log(err);
    return next(err);
  }else{
    res.json(summary);
  }
})
})

app.get('/api/summary',function(req,res,next){
  summary.find(function(err,summaries){
    if(err){
      return next(err)
    }else{
      console.log('EEEKK'+summaries)
      res.json(summaries)
    }
  })
})

// Get quiz by id
app.get("/api/test/:id", function(req, res, next) {
  quiz.findOne({ 'quizId': req.params.id }, function(err, test) {
    if (err) {
      console.log(err);
      //return next(err);
    } else {
      console.log(test);
      res.json(test);
    }
  });
});



/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});