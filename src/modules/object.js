export default class Score {
  constructor() {
    this.score = [];
  }

  add(user, score) {
    this.score.push({ user, score });
  }
}