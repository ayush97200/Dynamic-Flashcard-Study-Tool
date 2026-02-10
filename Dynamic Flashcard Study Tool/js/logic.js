import { flashcards, knownCards } from "./flashcard.js";
import { saveData } from "./storage.js";

export let currentIndex = 0;
let isFlipped = false;

export function getCurrentCard() {
  return flashcards[currentIndex];
}

export function flipCard() {
  isFlipped = !isFlipped;
  return isFlipped;
}

export function nextCard() {
  currentIndex++;
  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }
  isFlipped = false;
}

export function resetFlip() {
  isFlipped = false;
}

export function markKnown() {
  const card = flashcards.splice(currentIndex, 1)[0];
  knownCards.push(card);

  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }

  isFlipped = false;
  saveData(flashcards, knownCards);
}
