import { initialFlashcards, setFlashcards, knownCards } from "./flashcard.js";
import { loadData } from "./storage.js";
import { setupEvents, updateUI } from "./events.js";

const el = {
  cardContent: document.getElementById("cardContent"),
  counter: document.getElementById("cardCounter"),
  flipBtn: document.getElementById("flipBtn"),
  nextBtn: document.getElementById("nextBtn"),
  knownBtn: document.getElementById("knownBtn"),
  resetBtn: document.getElementById("resetBtn"),
  knownCount: document.getElementById("knownCount"),
  remainingCount: document.getElementById("remainingCount"),
  knownList: document.getElementById("knownList")
};

const saved = loadData();
setFlashcards(saved.flashcards || [...initialFlashcards]);
saved.knownCards.forEach(card => knownCards.push(card));

updateUI(el);
setupEvents(el);
