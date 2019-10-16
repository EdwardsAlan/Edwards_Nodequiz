/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-layout",
  template: `
  <div>
  <header>
    <mat-toolbar class="menu" role="header" color="primary">
      <mat-toolbar-row>
        <button mat-button class="toolbar__icon-button mat-button">
          <mat-icon>computer</mat-icon>
          <span style="margin-left: 5px !important" (click)="navdashboard()"
            >NodeQuiz</span>
        </button>
        <div fxFlex></div>
        <button
          mat-icon-button
          class="toolbar__icon-button"
          [matMenuTriggerFor]="menu">
          <mat-icon>account_circle</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item>
            <mat-icon>dashboard</mat-icon>
            <span>Dashboard</span>
          </button>
          <div fxFlex></div>
          <button (click)="logOut()" mat-menu-item>
            <mat-icon>exit_to_app</mat-icon>
            <span>Logout</span>
          </button>
        </mat-menu>
      </mat-toolbar-row>
    </mat-toolbar>
  </header>
  <main>
    <router-outlet></router-outlet>
  </main>
</div>
  `,
  styles: []
})
export class AuthLayoutComponent implements OnInit {
  constructor(private router: Router, private cookie: CookieService) {}

  ngOnInit() {}

  navHome() {
    const value: string = this.cookie.get("isAuthenticated");
    if (value) {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/session/login"]);
    }
  }

  logOut() {
    this.router.navigate(["/session/login"]);
  }
}