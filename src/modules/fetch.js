const apiId = 'oZhgduoPGExAgezAht0m';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameEndpoint = 'games/';
const scores = '/scores/';
const gameName = {name: 'PUBG'};
const userInput = {
  name: 
  score: 
}
export default class Game {

  createGame = async () => {
    try {
      const data = await fetch(baseUrl + gameEndpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(gameName)
      });
      const receive = await data.json()
      console.log(receive);
    } catch (err) {
      throw new Error(err);
    }
  };

  createScore = async () => {
   try{ 
    const data = await fetch(baseUrl + gameEndpoint + apiId +scores, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: json.stringify(scores)
    })
   }
  }
}

