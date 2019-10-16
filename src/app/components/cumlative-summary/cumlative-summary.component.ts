/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-cumlative-summary',
  templateUrl: './cumlative-summary.component.html',
  styleUrls: ['./cumlative-summary.component.css']
})
export class CumlativeSummaryComponent implements OnInit {

  summaries: any;
  errorMessage: string;


  constructor(private route: ActivatedRoute, private cookieService: CookieService, private http: HttpClient, private router:Router, private fb: FormBuilder, private location: Location) {


    this.http.get('/api/summary/all').subscribe(res => {
      if (res) {
        return this.summaries = res;
      } else {
        return this.errorMessage = "OH NO, I couldn't find the summaries!!!";
      }

    })




  }

  ngOnInit() {
  }

}
