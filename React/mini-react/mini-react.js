// Mini React — built from scratch, no libraries.
// Follow steps.md. Write each step yourself.
const rootElement = document.getElementById("root");

// rootElement.textContent = "Hello";

let slots = [];
let slotIndex = 0;

function useState(initialValue) {
  const currentIndex = slotIndex;

  if (slotIndex[currentIndex] === undefined) {
    slotIndex[currentIndex] = initialValue;
  }
}


function App() {  
  function increment() {
    count++;
    render();
  }

  window.increment = increment;
  return `Count: ${count}`;
}

function render() {
  const output = App();
  rootElement.textContent = output;
}

render();
