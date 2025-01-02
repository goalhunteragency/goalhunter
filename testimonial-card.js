document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".testimonial-card");
  let defaultCard = document.querySelector('.testimonial-card[data-animation="true"]');
  let activeCard = null;

  // Funktion, um die aktuelle aktive Karte zu setzen
  function setActiveCard(card) {
    // Deaktiviere die vorherige aktive Karte
    if (activeCard && activeCard !== card) {
      activeCard.removeAttribute("data-animation");
      activeCard.style.transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
      activeCard.style.boxShadow = "none";
    }

    // Aktiviere die neue Karte
    activeCard = card;
    card.setAttribute("data-animation", "true");
    card.style.transform = "translate3d(0, -4px, 0) rotate(-4deg) scale(1.035)";
    card.style.boxShadow = "16px 64px 80px 8px rgba(16, 24, 40, 0.14)";
  }

  // Funktion, um die Standardkarte zurückzusetzen
  function resetToDefault() {
    if (defaultCard) {
      setActiveCard(defaultCard);
    }
  }

  // Event Listener für Desktop (Mouseenter und Mouseleave)
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      setActiveCard(card);
    });

    card.addEventListener("mouseleave", () => {
      // Zurück zur Standardkarte, wenn keine andere Karte aktiv ist
      if (!activeCard) {
        resetToDefault();
      }
    });

    // Event Listener für mobile Geräte (Touch/Klick)
    card.addEventListener("click", () => {
      setActiveCard(card);
    });
  });

  // Sicherstellen, dass beim Laden die Standardkarte aktiv bleibt
  if (defaultCard) {
    setActiveCard(defaultCard);
  }
});