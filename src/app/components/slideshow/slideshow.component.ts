/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-root",
  templateUrl: "./slideshow.component.html",
  styleUrls: ["./slideshow.component.css"]
})
export class SlideshowComponent implements OnInit {
  slideshow: string;
  selection: string;
  presentationSlides = [
    {name: 'Slide 1', image: 'Slide1.png'},
    {name: 'Slide 2', image: 'Slide2.png'},
    {name: 'Slide 3', image: 'Slide3.png'},
    {name: 'Slide 4', image: 'Slide4.png'},
    {name: 'Slide 5', image: 'Slide5.png'},
    {name: 'Slide 6', image: 'Slide6.png'},
    {name: 'Slide 7', image: 'Slide7.png'},
    {name: 'Slide 8', image: 'Slide8.png'},
    {name: 'Slide 9', image: 'Slide9.png'},
    {name: 'Slide 10', image: 'Slide10.png'},
    {name: 'Slide 11', image: 'Slide11.png'},
    {name: 'Slide 12', image: 'Slide12.png'},
    {name: 'Slide 13', image: 'Slide13.png'},
    ]

  constructor(private route: ActivatedRoute) {
    this.slideshow = this.route.snapshot.paramMap.get("id");

    if (this.slideshow === "1") {
      this.selection = "Change approval process";
    } else if (this.slideshow === "2") {
      this.selection = "Pager Rotation Duties";
    } else if (this.slideshow === "3"){
      this.selection = "Security Controls";
    }else {
      this.selection = "Security Controls";
    }
    
  }
  ngOnInit() {}
}
