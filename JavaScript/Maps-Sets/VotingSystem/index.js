// ============================================================
// Build a Voting System
// Map to create a poll — Set to prevent duplicate voting
// ============================================================

// ── addOption(option) ────────────────────────────────────────
// - Empty option  → "Option cannot be empty"
// - Already exists → 'Option "<option>" already exists'
// - New option    → adds it with an empty Set as its value
//                   returns 'Option "<option>" added to the poll'

// ── vote(option, voterId) ────────────────────────────────────
// - Option missing → 'Option "<option>" does not exist'
// - Already voted  → 'Voter <id> has already voted for "<option>"'
// - New vote       → adds voterId to the Set
//                    returns 'Voter <id> voted for "<option>"'

// ── displayResults() ────────────────────────────────────────
// Returns a string in this exact format:
//
//   Poll Results:
//   Turkey: 2 votes
//   Morocco: 1 votes
//   Spain: 0 votes

// ── Requirements ────────────────────────────────────────────
// - poll must be a Map
// - Each value must be a Set
// - At least 3 options and 3 votes added
const poll = new Map();

function addOption(option) {
  if (option.length === 0) return "Option cannot be empty.";

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());

  return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);

  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  const lines = ["Poll Results:"];

  poll.forEach((value, key) => {
    lines.push(`${key}: ${value.size} votes`);
  });

  return lines.join("\n");
}

addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Malaysia");
addOption("Algeria");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
vote("Algeria", "traveler1");