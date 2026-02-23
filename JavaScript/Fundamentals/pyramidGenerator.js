// Pyramid Generator
// Example: pyramid("o", 4, false) produces:
//
//    o        ← row 1: 1 char,  3 spaces
//   ooo       ← row 2: 3 chars, 2 spaces
//  ooooo      ← row 3: 5 chars, 1 space
// ooooooo     ← row 4: 7 chars, 0 spaces
//
// Example: pyramid("o", 4, true) produces (inverted):
//
// ooooooo     ← row 4 (widest first)
//  ooooo
//   ooo
//    o        ← row 1 (vertex last)

function pyramid(char, rows, inverted) {

  // Step 1: Find the widest row's width
  // Pattern: rows=1 → 1, rows=2 → 3, rows=3 → 5, rows=4 → 7
  // Formula: 2 * rows - 1
  const maxWidth = 2 * rows - 1;

  // Step 2: Create an array to collect each row
  const lines = [];

  // Step 3: Build each row from top (1) to bottom (rows)
  for (let i = 1; i <= rows; i++) {

    // How many characters in this row?
    // Row 1 → 1, Row 2 → 3, Row 3 → 5, Row 4 → 7
    // Formula: 2 * i - 1
    const chars = 2 * i - 1;

    // How many spaces on the left to center this row?
    // We take the total gap (maxWidth - chars) and divide by 2
    // because the gap splits evenly: left side and right side
    // We only add the LEFT spaces (no trailing spaces allowed)
    //
    // Row 1: (7 - 1) / 2 = 3 → "   o"
    // Row 2: (7 - 3) / 2 = 2 → "  ooo"
    // Row 3: (7 - 5) / 2 = 1 → " ooooo"
    // Row 4: (7 - 7) / 2 = 0 → "ooooooo"
    const spaces = (maxWidth - chars) / 2;

    // Build the row: spaces + characters, then add it to the array
    lines.push(" ".repeat(spaces) + char.repeat(chars));
  }

  // Step 4: If inverted, just reverse the array
  // ["   o", "  ooo", " ooooo", "ooooooo"]
  //  becomes
  // ["ooooooo", " ooooo", "  ooo", "   o"]
  if (inverted) lines.reverse();

  // Step 5: Join all rows with newlines, and wrap with newlines at start and end
  return "\n" + lines.join("\n") + "\n";
}
