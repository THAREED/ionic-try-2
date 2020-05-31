import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private exerciseChoice = [];
  private exerciseImage = [];
  private examChoice = [];
  private examImage = [];
  private pauseCnt;
  private cnt;
  private help;
  constructor() { }

  setExamChoice(id, choice) {
    this.examChoice[id] = choice;
  }
  getExamChoice(id){
    return this.examChoice[id];
  }

  setExerciseChoice(id, choice) {
    this.exerciseChoice[id] = choice;
  }
  getExerciseChoice(id){
    return this.exerciseChoice[id];
  }

  setExerciseImage(id, image) {
    this.exerciseImage[id] = image;
  }
  getExerciseImage(id) {
    return this.exerciseImage[id];
  }

  setExamImage(id, image) {
    this.examImage[id] = image;
  }
  getExamImage(id) {
    return this.examImage[id];
  }

  setPauseCnt(num) {
    this.pauseCnt = num;
  }
  getPauseCnt() {
    return this.pauseCnt;
  }
  
  setHelpCnt(num) {
    this.help = num;
  }
  getHelpCnt() {
    return this.help;
  }

  setCnt(num) {
    this.cnt = num;
  }
  getCnt() {
    return this.cnt;
  }
}
