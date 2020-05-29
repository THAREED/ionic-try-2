import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private exerciseChoice = [];
  private examChoice = [];

  constructor() { }

  setExamChoice(id, choice) {
    this.examChoice[id] = choice;
  }

  getEamhoice(id){
    return this.examChoice[id];
  }

  setExerciseChoice(id, choice) {
    this.exerciseChoice[id] = choice;
  }

  getChoice(id){
    return this.exerciseChoice[id];
  }
}
