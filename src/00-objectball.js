function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }

  const gameObj = gameObject();
  const players = gameObj[team].players;
  
  function homeTeamName() {
    const homeTeamName = gameObj.home.teamName;
    return homeTeamName;
  }
  console.log(homeTeamName());

  function awayTeamName(){
    const awayTeamName = gameObj.away.teamName;
    return awayTeamName;
  }
  console.log(awayTeamName());

  function homeColors(){
    const homeColors = gameObj.home.colors;
    return homeColors;
  }
  console.log(homeColors());

  function awayColors(){
    const awayColors = gameObj.away.colors;
    return awayColors;
  }
  console.log(awayColors());

  function homePlayers(){
    const homePlayers = gameObj.home.players;
    return homePlayers;
  }
  console.log(homePlayers());

  function awayPlayers(){
    const awayPlayers = gameObj.away.players;
    return awayPlayers;
  }
  console.log(awayPlayers());

  function numPointsScored(playerName) {
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].points;
        }
      }
    }
    return null;
  }
  
 
  function shoeSize(playerName) {
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].shoe;
        }
      }
    }
    return null;
  }
  
  function teamColors(teamName) {
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        if (gameObj[team].teamName === teamName) {
          return gameObj[team].colors;
        }
      }
    }
    return null;
  }


  function teamNames() {
    const teamNamesArray = [];
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        teamNamesArray.push(gameObj[team].teamName);
      }
    }
    return teamNamesArray;
  }
  

  function playerNumbers(teamName) {
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        if (gameObj[team].teamName === teamName) {
          const playerNumbersArray = [];
          for (const player in players) {
            if (players.hasOwnProperty(player)) {
              playerNumbersArray.push(players[player].number);
            }
          }
          return playerNumbersArray;
        }
      }
    }
}


function mostPointsScored() {
    let maxPoints = 0;
    let playerName = '';
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            if (players[player].points > maxPoints) {
              maxPoints = players[player].points;
              playerName = player;
            }
          }
        }
      }
    }
    return playerName;
  }
  
  function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    const homePlayers = gameObj.home.players;
    for (const player in homePlayers) {
      if (homePlayers.hasOwnProperty(player)) {
        homeTeamPoints += homePlayers[player].points;
      }
    }
    const awayPlayers = gameObj.away.players;
    for (const player in awayPlayers) {
      if (awayPlayers.hasOwnProperty(player)) {
        awayTeamPoints += awayPlayers[player].points;
      }
    }
    if (homeTeamPoints > awayTeamPoints) {
      return gameObj.home.teamName;
    } else {
      return gameObj.away.teamName;
    }
  }


  function playerWithLongestName() {
    let longestName = '';
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            if (player.length > longestName.length) {
              longestName = player;
            }
          }
        }
      }
    }
    return longestName;
  }

  
function doesLongNameStealAton() {
    let longestName = '';
    let mostSteals = 0;
    let playerWithMostSteals = '';
    for (const team in gameObj) {
      if (gameObj.hasOwnProperty(team)) {
        for (const player in players) {
          if (players.hasOwnProperty(player)) {
            if (player.length > longestName.length) {
              longestName = player;
            }
            if (players[player].steals > mostSteals) {
              mostSteals = players[player].steals;
              playerWithMostSteals = player;
            }
          }
        }
      }
    }
    return longestName === playerWithMostSteals;
  }