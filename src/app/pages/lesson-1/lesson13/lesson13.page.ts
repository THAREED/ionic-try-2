import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson13',
  templateUrl: './lesson13.page.html',
  styleUrls: ['./lesson13.page.scss'],
})
export class Lesson13Page implements OnInit {
  idParam: string;
  lessonParam: string;
  constructor(
    private router: Router, 
    private route: ActivatedRoute   
  ) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
  }
  goHome(){
    this.router.navigate(['']);
  }
  nextPage(){
    this.router.navigate(['/lesson14', this.idParam, this.lessonParam]);
  }

}
