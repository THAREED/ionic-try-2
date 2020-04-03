import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson12',
  templateUrl: './lesson12.page.html',
  styleUrls: ['./lesson12.page.scss'],
})
export class Lesson12Page implements OnInit {

  lesson: string
  constructor(
    private router: Router,    
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lesson = this.route.snapshot.paramMap.get('lesson');
  }
  nextPage(){
    this.router.navigate(['/lesson13', this.lesson]);
  }

}
