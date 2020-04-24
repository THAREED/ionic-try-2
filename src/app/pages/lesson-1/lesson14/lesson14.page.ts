import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

var split
@Component({
  selector: 'app-lesson14',
  templateUrl: './lesson14.page.html',
  styleUrls: ['./lesson14.page.scss'],
})
export class Lesson14Page implements OnInit {
  title: String
  char0: String
  char0_split0: String
  char0_split1: String
  char1: String
  char2: String
  ambiguous0: String
  param: string
  lesson:Lesson
  SERVER_ADDRESS = 'http://localhost:3000'; // Your Node Address
  constructor(
    private http: HttpClient,
    private router: Router,    
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('lesson');
  }
  nextPage(){
      this.router.navigate(['/lesson21', this.param]);
  }


}
