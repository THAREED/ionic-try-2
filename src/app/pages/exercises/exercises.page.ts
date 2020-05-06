import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {
  param: String;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }
  ex1() {
    return this.router.navigate(['/ex1', 'lip']);
  }
  ex2() {
    return this.router.navigate(['/ex1', 'tongue']);
  }
  ex3() {
    return this.router.navigate(['/ex1', 'gum']);
  }
  ex4() {
    return this.router.navigate(['/ex1', 'saliva']);
  }
  ex5() {
    return this.router.navigate(['/ex1', 'teeth']);
  }
  ex6() {
    return this.router.navigate(['/ex1', 'denture']);
  }
  ex7() {
    return this.router.navigate(['/ex1', 'cleanliness']);
  }
  ex8() {
    return this.router.navigate(['/ex1', 'pain']);
  }

}
