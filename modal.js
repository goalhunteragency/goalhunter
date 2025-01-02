document.addEventListener("DOMContentLoaded", function () {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll("[data-modal]");

  // Modal öffnen
  openButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = button.getAttribute("data-modal-open");
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      if (modal) {
        modal.style.display = "flex"; // Modal sichtbar machen
        setTimeout(() => {
          modal.classList.add("show"); // Animation starten
          modal.setAttribute("aria-hidden", "false");
          document.body.style.overflow = "hidden"; // Scrollen verhindern
        }, 10);
      }
    });
  });

  // Modal schließen (Close-Buttons)
  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = button.closest("[data-modal]");
      if (modal) {
        modal.classList.remove("show"); // Animation rückgängig machen
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Scrollen erlauben
        setTimeout(() => {
          modal.style.display = "none"; // Modal verstecken
        }, 500);
      }
    });
  });

  // Klick außerhalb des Dialogs schließt das Modal
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        modal.classList.remove("show");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Scrollen erlauben
        setTimeout(() => {
          modal.style.display = "none"; // Modal verstecken
        }, 500);
      }
    });
  });
});