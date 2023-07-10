export default class questionModel {
  constructor() {
    this.questions = [];
  }

  init(questions) {
    this.questions = questions;
  }

  getQuestions() {
    return this.questions;
  }
}