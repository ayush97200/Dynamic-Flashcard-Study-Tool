const FLASH_KEY = "flashcards";
const KNOWN_KEY = "knownCards";

export function saveData(flashcards, knownCards) {
  localStorage.setItem(FLASH_KEY, JSON.stringify(flashcards));
  localStorage.setItem(KNOWN_KEY, JSON.stringify(knownCards));
}

export function loadData() {
  try {
    return {
      flashcards: JSON.parse(localStorage.getItem(FLASH_KEY)),
      knownCards: JSON.parse(localStorage.getItem(KNOWN_KEY)) || []
    };
  } catch (e) {
    console.error("Storage error", e);
    return { flashcards: null, knownCards: [] };
  }
}

export function clearStorage() {
  localStorage.clear();
}
