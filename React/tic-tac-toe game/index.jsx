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
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // derived values — filledCount, currentPlayer
  const filledCount = squares.filter((square) => square !== null).length;

  const currentPlayer = filledCount % 2 === 0 ? 'X' : 'O';
  
  // derived values — winner, isDraw, status message
  // "X", "O", or null. Recomputed from the board on every render.
  const winner = calculateWinner(squares);

  // A draw is a full board with no winner. Order matters: check winner first,
  // because a win on the ninth move fills the board too.
  const isDraw = !winner && filledCount === 9;

  // Nested ternary, read top to bottom: winner? draw? otherwise still playing.
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? "Draw"
      : `Next player: ${currentPlayer}`;

  // Runs when a square is clicked. `index` is which of the nine was hit (0-8).
  const handleClick = (index) => {
    // Guard 1: the game is already over — ignore every further click.
    if (winner) return;

    // Guard 2: this square is taken.
    if (squares[index]) return;
    // Copy the board into a NEW array. React compares by reference, so
    // mutating `squares` directly would not trigger a re-render.
    const nextSquares = [...squares];

    // Write the current player's mark into the copy at the clicked position.
    // Target on the left of `=`, value on the right.
    nextSquares[index] = currentPlayer;

    // Hand the new array to React. It writes the hook slot and re-renders,
    // which recomputes filledCount, currentPlayer, and the buttons.
    setSquares(nextSquares);
  }

  // Reset only has to clear the board. Every derived value — currentPlayer,
  // winner, isDraw, status — falls back on its own, because they are all
  // computed from `squares`. That is the payoff of not storing them.
  const handleReset = () => {
    setSquares(Array(9).fill(null));
  }

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>

      <p className="status">{status}</p>

      {/* Grid is inline because the lab only evaluates this file — an
          external stylesheet is not loaded when the tests run. */}
      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 5.5rem)",
          gridTemplateRows: "repeat(3, 5.5rem)",
          gap: "0.5rem",
        }}
      >
        {squares.map((square, index) => (
          <button
            className="square"
            key={index}
            // handleClick(index)  → calls it now, gives you the result
            // () => handleClick(index)   → a function that will call it later
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))
        }
      </div>

      <button id="reset" className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
