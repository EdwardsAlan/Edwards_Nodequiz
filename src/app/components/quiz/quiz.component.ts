/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Modified by: William Thomason
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizId:any;
quiz:any;
questions:any;
currentChoices:any;
quizResults:any;
employeeId:string;
questionNumber=0;
selectedAnswers=[]
answers=[]
correctAnswers=[]
score:any
qs:any=[];
q:any=[];
  constructor(private route:ActivatedRoute,private router:Router, private cookieService: CookieService,private http: HttpClient) {

    
    this.employeeId = this.cookieService.get('employeeId');
    this.quizId= parseInt(this.route.snapshot.paramMap.get("id"))
    //getting quiz information
    this.http.get('/api/test/'+ this.quizId).subscribe(res=>{
      if(res){
      console.log(res)
      this.quiz=res;
        this.questions=this.quiz.questions
      console.log(this.questions);
      }else{

    }

   })
  }
  //generating form that will be sent via http post
  onSubmit(form) {
    this.quizResults = form;
    this.quizResults['quizId'] = this.quizId;
    this.quizResults['employeeId']=this.employeeId
    console.log(this.quizResults)
    for(const prop in this.quizResults){
    if(this.quizResults.hasOwnProperty(prop)){
      if(prop !== 'employeeId' && prop !== 'quizId' && prop !=='score'){
        this.selectedAnswers.push(this.quizResults[prop].split(';')[0]);

        this.answers.push(this.quizResults[prop].split(';')[1]);
      }
    }
  }
let totalInCorrect = this.answers.filter(function(inCorrectAnswer){
  return inCorrectAnswer==="false";
})
let score=(this.questions.length)-totalInCorrect.length
console.log(score)
  //sending post request
   this.http.post('/api/quiz-results/', {
    employeeId:this.employeeId,
    quizId:this.quizId,
    score:this.score,
    
  })


  }
  ngOnInit() {
  }

}