export function updateCard(el, text) {
  el.textContent = text;
}

export function updateCounter(el, current, total) {
  el.textContent = `${current} / ${total}`;
}

export function renderKnownList(list, knownCards) {
  list.innerHTML = "";
  knownCards.forEach(card => {
    const li = document.createElement("li");
    li.textContent = card.term;
    list.appendChild(li);
  });
}
