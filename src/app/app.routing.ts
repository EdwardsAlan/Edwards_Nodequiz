/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: 30 September 2019
; Description: NodeQuiz
;===========================================
*/

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseLayoutComponent } from "./shared";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuardService } from "./shared/auth-guard/auth-guard.service";
import { SlideshowComponent } from "./components/slideshow/slideshow.component";
import { QuizComponent } from "./components/quiz/quiz.component";

export const AppRoutes: Routes = [
  {
    path: "session",
    component: AuthLayoutComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "not-found", component: NotFoundComponent }
    ]
  },
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "slideshow/:id",
        component: SlideshowComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "test/:id",
        component: QuizComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "summary",
        component: SummaryComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  { path: "**", redirectTo: "/session/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}