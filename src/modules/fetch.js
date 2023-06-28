const apiId = 'oZhgduoPGExAgezAht0m';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameEndpoint = 'games/';
const scores = '/scores/';
const gameName = { name: 'PUBG' };
const nameInput = document.querySelector('.name').value;
const scoreInput = document.querySelector('.score').value;
const userInput = {
  name: nameInput,
  score: scoreInput,
};
export default class Game {
  createGame = async () => {
    try {
      const data = await fetch(baseUrl + gameEndpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(gameName),
      });
      const receive = await data.json();
      return receive;
    } catch (err) {
      throw new Error(err);
    }
  };

  createScore = async () => {
    try {
      const data = await fetch(baseUrl + gameEndpoint + apiId + scores, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userInput),
      });
      const receive = await data.json();
      return receive;
    } catch (err) {
      return `something went wrong, ${err}`;
    }
  }

  static getData = async () => {
    try {
      const data = await fetch(baseUrl + gameEndpoint + apiId + scores, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      const receiveData = await data.json();
      return receiveData;
    } catch (err) {
      return err;
    }
  }

  static displayScores = () => {
    const list = document.querySelector('.scores');
    Game.getData()
      .then((data) => {
        let result = '';
        const scores = data.result;
        scores.forEach((score) => {
          result += `
            <li>${score.user}:${score.score}</li>
          `;
        });
        list.innerHTML = result;
        return result;
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  }
}