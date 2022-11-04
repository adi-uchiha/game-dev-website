import games from "./gameIds";

var chosenGame = games[Math.floor(Math.random()*games.length)]
var gameUrl = 'https://api.rawg.io/api/games/' + chosenGame + '?key=c583d6c4e2034b78b6a269b83bfee968'

const requests = {
    fetchBackdropGame: gameUrl
}

export default requests;