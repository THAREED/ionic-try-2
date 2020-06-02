import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private lip_0 = [];
  private lip_1 = [];
  private lip_2 = [];
  private tongue_0 = [];
  private tongue_1 = [];
  private tongue_2 = [];
  private gum_0 = [];
  private gum_1 = [];
  private gum_2 = [];
  private saliva_0 = [];
  private saliva_1 = [];
  private saliva_2 = [];
  private teeth_0 = [];
  private teeth_1 = [];
  private teeth_2 = [];
  private denture_0 = [];
  private denture_1 = [];
  private denture_2 = [];
  private cleanlines_0 = [];
  private cleanlines_1 = [];
  private cleanlines_2 = [];
  private pain_0 = [];
  private pain_1 = [];
  private pain_2 = [];
  constructor() { }

  getLipImage_0(){
    this.lip_0 = [
      'http://localhost:51412/1_0_001.png',
      'http://localhost:51412/1_0_002.png',
      'http://localhost:51412/1_0_003.png',
      'http://localhost:51412/1_0_004.png',
      'http://localhost:51412/1_0_005.png',
      'http://localhost:51412/1_0_006.png',
      'http://localhost:51412/1_0_007.png',
      'http://localhost:51412/1_0_008.png'
    ]
    return this.lip_0;
  }

  getLipImage_1(){
    this.lip_1 = [
      'http://localhost:51412/1_1_001.png',
      'http://localhost:51412/1_1_002.png',
      'http://localhost:51412/1_1_003.png',
      'http://localhost:51412/1_1_004.png',
      'http://localhost:51412/1_1_003.png'
    ]
    return this.lip_1;
  }

  getLipImage_2(){
    this.lip_2 = [
      'http://localhost:51412/1_2_001.png',
      'http://localhost:51412/1_2_002.png',
      'http://localhost:51412/1_2_003.png',
      'http://localhost:51412/1_2_004.png',
      'http://localhost:51412/1_2_005.png'
    ]
    return this.lip_2;
  }
}
