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

  getTongueImage_0(){
    this.tongue_0 = [
      'http://localhost:51412/2_0_001.png',
      'http://localhost:51412/2_0_002.png'
    ]
    return this.tongue_0;
  }
  getTongueImage_1(){
    this.tongue_1 = [
      'http://localhost:51412/2_1_001.png',
      'http://localhost:51412/2_1_002.png'
    ]
    return this.tongue_1;
  }
  getTongueImage_2(){
    this.tongue_2 = [
      'http://localhost:51412/2_2_001.png',
      'http://localhost:51412/2_2_002.png'
    ]
    return this.tongue_2;
  }

  getGumImage_0(){
    this.gum_0 = [
      'http://localhost:51412/3_0_001.png',
      'http://localhost:51412/3_0_002.png',
      'http://localhost:51412/3_0_003.png',
      'http://localhost:51412/3_0_004.png',
      'http://localhost:51412/3_0_005.png',
      'http://localhost:51412/3_0_006.png'
    ]
    return this.gum_0;
  }
  getGumImage_1(){
    this.gum_1 = [
      'http://localhost:51412/3_1_001.png',
      'http://localhost:51412/3_1_002.png',
      'http://localhost:51412/3_1_003.png',
      'http://localhost:51412/3_1_004.png'
    ]
    return this.gum_1;
  }
  getGumImage_2(){
    this.gum_2 = [
      'http://localhost:51412/3_2_001.png',
      'http://localhost:51412/3_2_002.png',
      'http://localhost:51412/3_2_003.png',
      'http://localhost:51412/3_2_004.png',
      'http://localhost:51412/3_2_005.png',
      'http://localhost:51412/3_2_006.png',
      'http://localhost:51412/3_2_007.png',
      'http://localhost:51412/3_2_008.png',
      'http://localhost:51412/3_2_009.png',
      'http://localhost:51412/3_2_010.png',
      'http://localhost:51412/3_2_011.png',
      'http://localhost:51412/3_2_012.png',
      'http://localhost:51412/3_2_013.png',
      'http://localhost:51412/3_2_014.png'
    ]
    return this.gum_2;
  }

  getSalivaImage_0(){
    this.saliva_0 = [
      'http://localhost:51412/4_0_001.png',
    ]
    return this.saliva_0;
  }
  getSalivaImage_1(){
    this.saliva_1 = [
      'http://localhost:51412/4_1_001.png',
      'http://localhost:51412/4_1_002.png',
      'http://localhost:51412/4_1_003.png'
    ]
    return this.saliva_1;
  }
  getSalivaImage_2(){
    this.saliva_2 = [
      'http://localhost:51412/4_2_001.png'
    ]
    return this.saliva_2;
  }

  getTeethImage_0(){
    this.teeth_0 = [
      'http://localhost:51412/5_0_001.png',
      'http://localhost:51412/5_0_002.png',
      'http://localhost:51412/5_0_003.png',
      'http://localhost:51412/5_0_004.png',
      'http://localhost:51412/5_0_005.png',
      'http://localhost:51412/5_0_006.png',
      'http://localhost:51412/5_0_007.png',
      'http://localhost:51412/5_0_008.png',
      'http://localhost:51412/5_0_009.png',
      'http://localhost:51412/5_0_010.png'
    ]
    return this.teeth_0;
  }
  getTeethImage_1(){
    this.teeth_1 = [
      'http://localhost:51412/5_1_001.png',
      'http://localhost:51412/5_1_002.png',
      'http://localhost:51412/5_1_003.png',
      'http://localhost:51412/5_1_004.png',
      'http://localhost:51412/5_1_005.png',
      'http://localhost:51412/5_1_006.png',
      'http://localhost:51412/5_1_007.png',
      'http://localhost:51412/5_1_008.png'
    ]
    return this.teeth_1;
  }
  getTeethImage_2(){
    this.teeth_2 = [
      'http://localhost:51412/5_2_001.png',
      'http://localhost:51412/5_2_002.png',
      'http://localhost:51412/5_2_003.png',
      'http://localhost:51412/5_2_004.png',
      'http://localhost:51412/5_2_005.png',
      'http://localhost:51412/5_2_006.png',
      'http://localhost:51412/5_2_007.png',
      'http://localhost:51412/5_2_008.png',
      'http://localhost:51412/5_2_009.png',
      'http://localhost:51412/5_2_010.png'
    ]
    return this.teeth_2;
  }

  getDentureImage_0(){
    this.denture_0 = [
      'http://localhost:51412/6_0_001.png',
      'http://localhost:51412/6_0_002.png',
      'http://localhost:51412/6_0_003.png',
      'http://localhost:51412/6_0_004.png',
    ]
    return this.denture_0;
  }
  getDentureImage_1(){
    this.denture_1 = [
      'http://localhost:51412/6_1_001.png',
      'http://localhost:51412/6_1_002.png',
      'http://localhost:51412/6_1_003.png',
    ]
    return this.denture_1;
  }
  getDentureImage_2(){
    this.denture_2 = [
      'http://localhost:51412/6_2_001.png',
      'http://localhost:51412/6_2_002.png'
    ]
    return this.denture_2;
  }

  getCleanImage_0(){
    this.cleanlines_0 = []
    return this.cleanlines_0;
  }
  getCleanImage_1(){
    this.cleanlines_1 = []
    return this.cleanlines_1;
  }
  getCleanImage_2(){
    this.cleanlines_2 = [
      'http://localhost:51412/7_2_001.png',
      'http://localhost:51412/7_2_002.png',
      'http://localhost:51412/7_2_003.png',
      'http://localhost:51412/7_2_004.png',
      'http://localhost:51412/7_2_005.png'
    ]
    return this.cleanlines_2;
  }
  
}
