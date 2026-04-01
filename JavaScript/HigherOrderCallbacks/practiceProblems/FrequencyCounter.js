// Frequency Counter Pattern
// Goal: find the item that appears most often across all orders
//
// Data flow overview:
//   orders (array of objects)
//     → allItems (flat array of strings)
//       → frequency (object mapping each item to its count)
//         → most frequent item name (string)

const orders = [
  { id: 1, customer: "Alice", items: ["book", "pen", "notebook"], total: 45 },
  { id: 2, customer: "Bob", items: ["laptop", "mouse"], total: 1200 },
  { id: 3, customer: "Alice", items: ["eraser"], total: 5 },
  { id: 4, customer: "Charlie", items: ["book", "highlighter"], total: 30 },
  { id: 5, customer: "Bob", items: ["keyboard"], total: 150 },
];


function getTheMostOrderedItem(orders) {
  // --- STEP 1: Flatten all items into one array ---
  // Each order has an `items` property which is an array of strings.
  // We use .reduce() starting with an empty array [] as the accumulator.
  // For each order, we call accumulate.concat(order.items) which merges
  // the current accumulator with that order's items array and returns
  // a new combined array — which becomes the next accumulator.
  //
  // .concat() does NOT mutate the original — it returns a new array.
  // That's why the implicit return works here (no curly braces needed).
  //
  // Iteration by iteration:
  //   Start:       accumulate = []
  //   Order 1:     [].concat(["book", "pen", "notebook"])      → ["book", "pen", "notebook"]
  //   Order 2:     [...].concat(["laptop", "mouse"])           → ["book", "pen", "notebook", "laptop", "mouse"]
  //   Order 3:     [...].concat(["eraser"])                    → ["book", "pen", "notebook", "laptop", "mouse", "eraser"]
  //   Order 4:     [...].concat(["book", "highlighter"])       → [..., "eraser", "book", "highlighter"]
  //   Order 5:     [...].concat(["keyboard"])                  → [..., "highlighter", "keyboard"]
  //
  // After this step, allItems looks like:
  // ["book", "pen", "notebook", "laptop", "mouse", "eraser", "book", "highlighter", "keyboard"]
  //
  // Notice "book" appears twice — once from order 1 and once from order 4.
  // That's what we'll count in step 2.
  const allItems = orders.reduce(
    (accumulate, order) => accumulate.concat(order.items),
    [],
  );

  // --- STEP 2: Count how many times each item appears ---
  // We start with an empty object {} as the accumulator.
  // For each item string in allItems, we look it up in the accumulator:
  //   - If it already exists, we increment its count by 1
  //   - If it doesn't exist yet (undefined), we initialize it to 1
  //
  // accumulate[item] uses bracket notation to dynamically look up the key.
  // `item` is a string like "book", so accumulate["book"] reads/writes that key.
  //
  // How accumulate[item] = (accumulate[item] || 0) + 1 works:
  //
  //   First time seeing "book":
  //     accumulate["book"]          → undefined (key doesn't exist yet)
  //     (undefined || 0)            → 0  (undefined is falsy, so || returns 0)
  //     0 + 1                       → 1
  //     accumulate["book"] = 1
  //     accumulate is now: { book: 1 }
  //
  //   First time seeing "pen":
  //     accumulate["pen"]           → undefined
  //     (undefined || 0) + 1        → 1
  //     accumulate["pen"] = 1
  //     accumulate is now: { book: 1, pen: 1 }
  //
  //   Second time seeing "book" (from order 4):
  //     accumulate["book"]          → 1  (already exists)
  //     (1 || 0)                    → 1  (1 is truthy, so || keeps it)
  //     1 + 1                       → 2
  //     accumulate["book"] = 2
  //     accumulate is now: { book: 2, pen: 1, ... }
  //
  // Without the || 0 guard:
  //   accumulate[item] + 1 on a missing key → undefined + 1 → NaN (broken)
  //   The || 0 ensures we always start from 0 on the first occurrence.
  //
  // After this step, frequency looks like:
  // { book: 2, pen: 1, notebook: 1, laptop: 1, mouse: 1, eraser: 1, highlighter: 1, keyboard: 1 }
  const frequency = allItems.reduce((accumulate, item) => {
    accumulate[item] = (accumulate[item] || 0) + 1;
    return accumulate;
  }, {});

  // --- STEP 3: Find the item with the highest count ---
  // Object.keys(frequency) converts the frequency object into an array of
  // just the keys (the item names), so we can use .reduce() on them:
  // ["book", "pen", "notebook", "laptop", "mouse", "eraser", "highlighter", "keyboard"]
  //
  // The initial value is Object.keys(frequency)[0] — the first key — "book".
  // This is our starting "current winner" before any comparisons happen.
  //
  // In the callback, `accumulate` is the current winner (a string like "book")
  // and `item` is the challenger being compared against it.
  //
  // The ternary  frequency[accumulate] > frequency[item] ? accumulate : item
  // reads: "is the winner's count higher than the challenger's count?"
  //   - If yes → return accumulate (keep the current winner)
  //   - If no  → return item (challenger takes over as new winner)
  //
  // Iteration by iteration:
  //   Initial value:  accumulate = "book"
  //
  //   vs "pen":        frequency["book"]=2  > frequency["pen"]=1   → true  → keep "book"
  //   vs "notebook":   frequency["book"]=2  > frequency["notebook"]=1 → true → keep "book"
  //   vs "laptop":     frequency["book"]=2  > frequency["laptop"]=1 → true  → keep "book"
  //   vs "mouse":      frequency["book"]=2  > frequency["mouse"]=1  → true  → keep "book"
  //   vs "eraser":     frequency["book"]=2  > frequency["eraser"]=1 → true  → keep "book"
  //   vs "highlighter":frequency["book"]=2  > frequency["highlighter"]=1 → true → keep "book"
  //   vs "keyboard":   frequency["book"]=2  > frequency["keyboard"]=1 → true → keep "book"
  //
  // "book" wins every round because it's the only item with count 2.
  // Final return value: "book"
  return Object.keys(frequency).reduce((accumulate, item) => {
    return frequency[accumulate] > frequency[item] ? accumulate : item;
  }, Object.keys(frequency)[0]);
}
