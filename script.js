// Functions
const gameBoard = (() => {
    const actualBoard = ['', '', '', '', '', '', '', '', '']
    return {actualBoard}
})

const createPlayer = (playerName, playerSymbol) => {
    return {playerName, playerSymbol}
}


const gameController = () => {
    const {actualBoard} = actualBoard

    let symbol = ''
    let winningPlayer = ''
}

// Execution
const playerOne = createPlayer('Player 1', 'X')
const playerTwo = createPlayer('Player 2', 'O')

