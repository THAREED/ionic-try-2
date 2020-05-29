import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-ex1-score',
  templateUrl: './ex1-score.page.html',
  styleUrls: ['./ex1-score.page.scss'],
})
export class Ex1ScorePage implements OnInit {
  images:Array<String>;
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.images = this.imageService.getLipImage_0().concat(this.imageService.getLipImage_1()).concat(this.imageService.getLipImage_2())
  }

}
