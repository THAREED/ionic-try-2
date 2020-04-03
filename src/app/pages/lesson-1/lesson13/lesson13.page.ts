import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lesson13',
  templateUrl: './lesson13.page.html',
  styleUrls: ['./lesson13.page.scss'],
})
export class Lesson13Page implements OnInit {

  lesson: string
  constructor(
    private router: Router,    
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.lesson = this.route.snapshot.paramMap.get('lesson');
  }

  prevPage(){
    this.router.navigate(['/lesson12', this.lesson]);
  }
  nextPage(){
    this.router.navigate(['/lesson14', this.lesson]);
  }

}
