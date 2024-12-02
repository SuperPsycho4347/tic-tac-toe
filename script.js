// Functions
function gameBoard() {
    // Initial board
    const actualBoard = []

    // Creates a 3x3 board 
    for(let i = 0; i < 3; i++) {
        actualBoard[i] = []
        for(let j = 0; j < 3; j++) {
            actualBoard[i][j]= ""
        }
    }

    return {actualBoard}
}

function createPlayer(playerName, playerMark) {
    this.playerName = playerName
    this.playerMark = playerMark

    return{playerName, playerMark}
}

// Execution
