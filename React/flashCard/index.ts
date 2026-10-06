// Types

interface FlashCard {
  questionText: string;
  questionAnswer: string;
}

class InvalidUserInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidUserInputError";
  }
}

// Data

let currentCards: FlashCard[] = [
  {
    questionText: "What does `const` prevent?",
    questionAnswer: "Reassigning the variable. It does not stop mutating an array or object.",
  },
  {
    questionText: "What does `super(message)` do in a class that extends Error?",
    questionAnswer: "It calls the parent constructor, so Error sets up the message.",
  },
  {
    questionText: "What does `FlashCard[]` mean?",
    questionAnswer: "An array where every item matches the FlashCard interface.",
  },
];

let currentIndex: number = currentCards.length - 1;

// DOM elements

const flashcard = document.getElementById("flashcard") as HTMLDivElement;
const cardQuestion = document.getElementById("card-question") as HTMLParagraphElement;
const cardAnswer = document.getElementById("card-answer") as HTMLParagraphElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
const entryForm = document.getElementById("entry-form") as HTMLFormElement;
const frontText = document.getElementById("front-text") as HTMLTextAreaElement;
const backText = document.getElementById("back-text") as HTMLTextAreaElement;

// Render

function displayCard() {
  flashcard.classList.remove("flipped");
  if (currentCards.length === 0) {
    cardQuestion.textContent = "No cards yet. Add one below.";
    cardAnswer.textContent = "";
    return;
  }

  const card = currentCards[currentIndex];
  cardQuestion.textContent = card.questionText;
  cardAnswer.textContent = card.questionAnswer;
}

// Events

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

deleteBtn.addEventListener("click", () => {
  currentCards.splice(currentIndex, 1);
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) currentIndex = 0;
  displayCard();
});


entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionText = frontText.value.trim();
  const questionAnswer = backText.value.trim();

  if (questionText === "" || questionAnswer === "") {
    throw new InvalidUserInputError("Both the question and the answer are required.");
  }

  currentCards.push({ questionText, questionAnswer });
  currentIndex = currentCards.length - 1;
  displayCard();
  entryForm.reset();
});

// Start

displayCard();
