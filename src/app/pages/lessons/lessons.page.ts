import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})

export class LessonsPage implements OnInit {

  constructor(
    private route: Router,
  ) {}

  ngOnInit() {
  }
  lesson1()
  {
    return this.route.navigate(['/lesson11', "lip"]);
  }
  lesson2()
  {
    return this.route.navigate(['/lesson11', "tongue"]);
  }
  lesson3()
  {
    return this.route.navigate(['/lesson11', "gum"]);
  }
  lesson4()
  {
    return this.route.navigate(['/lesson11', "saliva"]);
  }
  lesson5()
  {
    return this.route.navigate(['/lesson11', "teeth"]);
  }
  lesson6()
  {
    return this.route.navigate(['/lesson11', "denture"]);
  }
  lesson7()
  {
    return this.route.navigate(['/lesson11', "cleanliness"]);
  }
  lesson8()
  {
    return this.route.navigate(['/lesson11', "pain"]);
  }



}
