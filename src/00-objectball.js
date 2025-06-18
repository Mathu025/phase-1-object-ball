function gameObject() {
    return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ['Black', 'White'],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5, 

            },
            "Jason Terry": {
                number: 31,
                shoe: 19,
                points: 15,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            },
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ['Turquoise', 'Purple'],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismack Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            },
            }           
    }
    }
}
console.log(gameObject());

    const game = gameObject();

function numPointsScored(name) {
    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        if (players[name]) {
            return players[name].points
        }
    }
}

function shoeSize(name) {
    for (let teamKey in game) {
        const team = game[teamKey];
        const players= team.players;

        if (players[name]) {
            return players[name].shoe
        } 
    }
}

function teamColors(teamName) {
    for (let teamKey in game) {
        const team = game[teamKey];

        if (team.teamName === teamName) {
            return team.colors
        }    
}
}

function teamNames() {
    const names = [];
    for (let teamKey in game) {
        const team = game[teamKey]
        names.push(team.teamName)
    }
    return names;
}
 
function playerNumbers(teamName) {
    const jersey = [];

    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            for (let player in team.players) {
                jersey.push(team.players[player].number);
            }
        }
    }
    return jersey;
}


function playerStats(playerName) {
        for (let teamKey in game) {
            const team = game[teamKey];
            const players = team.players

            if (players[playerName]) {
                return players[playerName]
            }
            }
        }

function bigShoeRebounds() {
    let biggestShoeSize = 0;
    let playerWithBiggestShoe = null;

    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players

        for (let playerName in players) {
            const player = players[playerName];

        
        if (player.shoe > biggestShoeSize) {
            biggestShoeSize = player.shoe
            playerWithBiggestShoe = player
        }
}
return playerWithBiggestShoe.rebounds
}
}

function mostPointsScored() {
    let points = 0;
    let playerWithMostPoints = null;

    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players

        for (let playerName in players) {
            const player = players[playerName];

            if (player.points > points) {
                points = player.points
                playerWithMostPoints = player
            }
    }
}
    return playerWithMostPoints.points
}


function winningTeam() {
    let points = 0;
    let winner = "";

    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        let teamTotal = 0;

        for (let playerName in players) {
            const player = players[playerName];
            teamTotal += player.points
        }


            if (teamTotal > points) {
                teamTotal = points
                winner = team.teamName
        }
    }
    return winner
}

function playerWithLongestName() {
    let long = 0;
    let player = "";

    for (let teamKey in game) {
        const team = game[teamKey]
        const players = team.players

    for (let playerName in players) {
        if (playerName.length > long) {
            playerName.length = long
            player = playerName
        }
    }
        }
        return player
    }

function doesLongNameStealATon() {
    let long = 0;
    let player = "";

    for (let teamKey in game) {
        const team = game[teamKey]
        const players = team.players

    for (let playerName in players) {
        if (playerName.length > long) {
        long =  playerName.length
            player = playerName
        }
    }
        }
        for (let teamKey in game) {
        const team = game[teamKey]
        const players = team.players

        if (players[player]) {
            return players[player].steals = true
        }

        }
}


