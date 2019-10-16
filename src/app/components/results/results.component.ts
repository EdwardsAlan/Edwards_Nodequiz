/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: 30 September 2019
; Description: NodeQuiz
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { QuizComponent } from "../quiz/quiz.component";
import { Router } from "@angular/router";


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<QuizComponent>, private router: Router) { }
  @Input() public test
  

  ngOnInit() {
  }

}
