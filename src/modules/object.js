export default class Score {
  constructor() {
    this.score = [];
  }

  add(name, scores) {
    this.score.push({ name, scores });
  }
}