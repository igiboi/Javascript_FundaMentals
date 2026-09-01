const { useState } = React;

// The eight ways to win: three across, three down, two diagonals.
// Each inner array holds the three board indexes that must match.
const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Pure function. Takes the board array, returns "X", "O", or null.
// No hooks, no state — it only reads what you hand it.
function calculateWinner(squares) {
  // TODO (Rung 5)
}

export function Board() {
  // TODO (Rung 1): one piece of state — the nine squares
  const [squares, setSquares] = useState(Array(9).fill(null));

  // TODO (Rung 1): derived values — filledCount, currentPlayer
  const filledCount = squares.filter((square) => square !== null).length;
  
  // TODO (Rung 5): derived values — winner, isDraw, status message

  // TODO (Rung 2): handleClick(index)

  // TODO (Rung 7): handleReset()

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>

      {/* TODO (Rung 5): render the status message here */}
      <p className="status"></p>

      <div className="board">
        {/* TODO (Rung 1): map over the squares state to render nine
            <button className="square"> elements */}
      </div>

      {/* TODO (Rung 7): wire onClick to handleReset */}
      <button id="reset" className="reset">
        Reset
      </button>
    </div>
  );
}
