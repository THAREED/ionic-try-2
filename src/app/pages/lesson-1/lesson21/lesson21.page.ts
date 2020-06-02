import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../../../models/lesson';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ImageService } from '../../../services/image.service';

let d;
@Component({
  selector: 'app-lesson21',
  templateUrl: './lesson21.page.html',
  styleUrls: ['./lesson21.page.scss'],
})
export class Lesson21Page implements OnInit {
  title: String;
  char0: String;
  char0_split0: String;
  char0_split1: String;
  char1: String;
  char2: String;
  ambiguous1: String;
  idParam: String;
  lessonParam: String;
  lesson: Lesson;
  src_m_1: String;
  src_m_2: String;
  src: String;
  SERVER_ADDRESS = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private screenOrientation: ScreenOrientation,
    private image: ImageService
  ) { }

  ngOnInit() {
    this.idParam = this.route.snapshot.paramMap.get('id');
    this.lessonParam = this.route.snapshot.paramMap.get('lesson');
    this.screenOrientation.unlock();
    if(this.lessonParam === 'lip'){
      this.src_m_1 = this.image.getLipImage_0()[1]
      this.src_m_2 = this.image.getLipImage_0()[5]
      this.src = this.image.getLipImage_0()[1]
    }
    if(this.lessonParam === 'tongue'){
      this.src_m_1 = this.image.getTongueImage_1()[1]
      this.src_m_2 = this.image.getTongueImage_1()[2]
      this.src = this.image.getTongueImage_1()[1]
    }
    if(this.lessonParam === 'gum'){
      this.src_m_1 = this.image.getGumImage_1()[1]
      this.src_m_2 = this.image.getGumImage_1()[2]
      this.src = this.image.getGumImage_1()[1]
    }
    if(this.lessonParam === 'saliva'){
      this.src_m_1 = this.image.getSalivaImage_1()[1]
      this.src_m_2 = this.image.getSalivaImage_1()[2]
      this.src = this.image.getSalivaImage_1()[1]
    }
    if(this.lessonParam === 'teeth'){
      this.src_m_1 = this.image.getTeethImage_1()[1]
      this.src_m_2 = this.image.getTeethImage_1()[2]
      this.src = this.image.getTeethImage_1()[1]
    }
    if(this.lessonParam === 'denture'){
      this.src_m_1 = this.image.getDentureImage_1()[1]
      this.src_m_2 = this.image.getDentureImage_1()[2]
      this.src = this.image.getDentureImage_1()[1]
    }
    if(this.lessonParam === 'cleanliness'){
      this.src_m_1 = this.image.getCleanImage_1()[1]
      this.src_m_2 = this.image.getCleanImage_1()[2]
      this.src = this.image.getCleanImage_1()[1]
    }
  }
  nextPage() {
    if (this.ambiguous1 != null) {
      this.router.navigate(['/ambiguous1', this.idParam, this.lessonParam]);
    } else {
      // this.router.navigate(['/lesson31', this.param]);
      this.router.navigate(['/lesson15', this.idParam, this.lessonParam]);
    }
  }
  ionViewWillEnter() {
      this.http.get<Lesson>(`${this.SERVER_ADDRESS}/lesson/` + this.lessonParam)
      .pipe(
        tap(lesson => {
          return lesson;
        })
      ).subscribe(lesson => {
        this.lesson = lesson;
        this.title = lesson[0].title;
        this.char0 = lesson[0].characteristic_1;
        d = this.char0.split(',', 2);
        this.char0_split0 = d[0];
        this.char0_split1 = d[1];
        this.char1 = lesson[0].characteristic_1;
        this.char2 = lesson[0].characteristic_2;
        this.ambiguous1 = lesson[0].ambiguous_1;
      });

  }

}
