const xhr = new XMLHttpRequest();
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6XXWCXn9VJxphtkrJMBV/scores/';

export default class getData {
  constructor() {
    this.scoreData = [];
  }

  async getScore() {
    const promise = new Promise((myResolve) => {
      xhr.open('GET', url);
      xhr.onload = () => {
        if (xhr.status === 200) {
          myResolve(xhr.response);
        } else {
          myResolve('Error');
        }
      };
      xhr.send();
    });
    const scoreList = JSON.parse(await promise);
    this.scoreData = scoreList.result;
    this.scoreData.sort((a, b) => b.score - a.score);
  }
}