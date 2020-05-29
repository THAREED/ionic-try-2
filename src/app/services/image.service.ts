import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private lip_0 = [];
  private lip_1 = [];
  private lip_2 = [];

  constructor() { }

  getLipImage_0(){
    this.lip_0 = [
      '1_0_001.png',
      '1_0_002.png',
      '1_0_003.png',
      '1_0_004.png',
      '1_0_005.png',
      '1_0_006.png',
      '1_0_007.png',
      '1_0_008.png'
    ]
    return this.lip_0;
  }

  getLipImage_1(){
    this.lip_1 = [
      '1_1_001.png',
      '1_1_002.png',
      '1_1_003.png',
      '1_1_004.png'
    ]
    return this.lip_1;
  }

  getLipImage_2(){
    this.lip_2 = [
      '1_2_001.png',
      '1_2_002.png',
      '1_2_003.png',
      '1_2_004.png',
      '1_2_005.png'
    ]
    return this.lip_2;
  }
}
