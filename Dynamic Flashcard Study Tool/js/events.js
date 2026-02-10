import { 
  getCurrentCard, 
  flipCard, 
  nextCard, 
  markKnown, 
  resetFlip,
  currentIndex 
} from "./logic.js";

import { flashcards, knownCards } from "./flashcard.js";
import { updateCard, updateCounter, renderKnownList } from "./dom.js";

export function setupEvents(el) {

  el.flipBtn.addEventListener("click", () => {
    const card = getCurrentCard();
    if (!card) return;

    const flipped = flipCard();
    updateCard(el.cardContent, flipped ? card.definition : card.term);
  });

  el.nextBtn.addEventListener("click", () => {
    if (!flashcards.length) return;

    nextCard();
    updateUI(el);
  });

  el.knownBtn.addEventListener("click", () => {
    if (!flashcards.length) return alert("No more cards!");

    markKnown();
    updateUI(el);
  });

  el.resetBtn.addEventListener("click", () => {
    if (confirm("Reset all progress?")) {
      localStorage.clear();
      location.reload();
    }
  });
}

export function updateUI(el) {
  if (!flashcards.length) {
    updateCard(el.cardContent, "🎉 No more cards!");
    updateCounter(el.counter, 0, 0);
  } else {
    const card = flashcards[currentIndex];
    updateCard(el.cardContent, card.term);
    updateCounter(el.counter, currentIndex + 1, flashcards.length);
  }

  el.knownCount.textContent = knownCards.length;
  el.remainingCount.textContent = flashcards.length;
  renderKnownList(el.knownList, knownCards);
}
