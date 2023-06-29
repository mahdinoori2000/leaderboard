const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameEndpoint = 'games/';
const id = 'oZhgduoPGExAgezAht0m/';
const scores = 'scores/';
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');
const gameName = {
  name: 'PUBG',
};

const userInput = {
  name: String,
  score: Number,
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

  static createScore = async () => {
    const userName = nameInput.value;
    const userScore = parseInt(scoreInput.value, 10);

    if (userName && userScore) {
      try {
        await fetch(baseUrl + gameEndpoint + id + scores, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: userName, score:userScore }),
        });
      } catch (err) {
        throw new Error('Failed to submit score');
      }
    }
  };

  static getData = async () => {
    try {
      const data = await fetch(baseUrl + gameEndpoint + id + scores, {
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
      .catch((err) => err);
  }

  static emptyForm = () => {
    nameInput.value = '';
    scoreInput.value = '';
  }
}