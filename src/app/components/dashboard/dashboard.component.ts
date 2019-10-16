/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: 30 September 2019
; Description: NodeQuiz
;===========================================
*/
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  quizzes: any;
  constructor() {
    this.quizzes = [
    {id: 1 , name: "Change approval process"},
    {id: 2 , name: "Pager Rotation Duties"},
    {id: 3 , name: "Security Controls"},
    ]
  }

  ngOnInit() {}
}
