const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6XXWCXn9VJxphtkrJMBV/scores/';

export default class GetData {
  constructor() {
    this.scoreData = [];
  }

  async getScore() {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => response.json()).then((json) => { this.scoreData = json.result; });
    this.scoreData.sort((a, b) => b.score - a.score);
  }
}