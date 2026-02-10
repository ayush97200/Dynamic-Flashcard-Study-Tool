export const initialFlashcards = [
  {
    term: "HTML",
    definition: "HTML (HyperText Markup Language) defines the structure of a web page using elements like headings, paragraphs, links, images, and forms."
  },
  {
    term: "CSS",
    definition: "CSS (Cascading Style Sheets) controls layout, colors, fonts, spacing, and responsiveness of a web page."
  },
  {
    term: "JavaScript",
    definition: "JavaScript adds interactivity to web pages such as events, animations, form validation, and dynamic content updates."
  },
  {
    term: "DOM",
    definition: "The Document Object Model represents HTML as a tree structure that JavaScript can manipulate."
  },
  {
    term: "localStorage",
    definition: "localStorage stores data in the browser persistently using key-value pairs."
  },
  {
    term: "Event Listener",
    definition: "An event listener listens for user actions like clicks and executes a function when triggered."
  }
];

export let flashcards = [];
export let knownCards = [];

export function setFlashcards(data) {
  flashcards = data;
}
