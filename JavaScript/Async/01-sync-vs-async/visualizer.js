// mini event-loop visualizer — model the machine, watch it tick
// We are NOT cloning V8. We are building a small scheduler that behaves
// the same way, so the invisible four pieces become code we can watch.

// ── The four pieces ───────────────────────────────────────────
const callStack = [];      // where "code runs" — one thing at a time (LIFO)
const webApis = [];        // background work (timers) lives here
const callbackQueue = [];  // finished callbacks wait in line here (FIFO)
// The event loop is a function (below), not an array — it's the traffic cop.

// ── A tiny logger so every state change is visible ────────────
let tick = 0;
function snapshot(label) {
  tick++;
  console.log(`\n[tick ${tick}] ${label}`);
  console.log(`  callStack:     [${callStack.join(", ")}]`);
  console.log(`  webApis:       [${webApis.map((w) => w.name).join(", ")}]`);
  console.log(`  callbackQueue: [${callbackQueue.map((c) => c.name).join(", ")}]`);
}

// ── Piece 1: run a synchronous task on the call stack ─────────
// A "task" here is just { name, run } where run() is what it does.
function runSync(task) {
  // TODO (you): push task.name onto callStack, snapshot,
  //             call task.run(), then pop it off, snapshot.
}

// ── Piece 2: hand a job to the Web APIs ───────────────────────
// This models setTimeout: the callback goes to the background.
function handToWebApi(name, callback) {
  // TODO (you): push { name, callback } onto webApis, snapshot.
}

// ── Piece 3: Web API finishes → move callback to the queue ────
function webApiDone() {
  // TODO (you): shift the first job off webApis,
  //             push { name, run: callback } onto callbackQueue, snapshot.
}

// ── Piece 4: THE EVENT LOOP ───────────────────────────────────
// Its ONE rule: if the call stack is empty, take the next thing
// from the queue and run it on the stack.
function eventLoop() {
  // TODO (you): while there is work left, if callStack is empty
  //             and callbackQueue has items, take the first one
  //             and runSync() it. (This is the heart of the whole thing.)
}

// ── A scenario to run through our model ───────────────────────
// This mirrors examples.js Example 2:  console.log("1"); setTimeout(...,0); console.log("3");
// PREDICT the tick order before running `node visualizer.js`.
