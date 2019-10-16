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
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ResultsComponent } from "../results/results.component";



@Component({
  selector: 'app-quiz',
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})

export class QuizComponent implements OnInit {
  quizId:number;
  quiz:any;
  selectedAnswer: string =" ";
  currentQuestion :any;
  currentChoices:any;

  constructor(private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog, private location: Location) {
    this.quizId= parseInt(this.route.snapshot.paramMap.get("id"), 10);
    this.http.get('/api/test/'+ this.quizId).subscribe(res=>{
      if(res){
        console.log(res)
      this.quiz=res;
      this.currentQuestion=this.quiz.questions[0].question
      this.currentChoices=this.quiz.questions[0].choices
     
      }else{
        
      }

    })
    
   }
   
   openDialog() {
    const dialogConfig = new MatDialogConfig();

    const quizModal = this.dialog.open(ResultsComponent, {
      width: "50%",
      height: "80%"
    });
   }
   ngOnInit() {

  
      }
     }
     
     
   
 