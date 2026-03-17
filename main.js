const navigationMenu = document.querySelector(".nav-container");

function openNav() {
  const html = `<div class="nav-content">
        <div class="nav-items">
          <p class="nav-item">Über mich</p>
          <p class="nav-item">Kurse</p>
          <p class="nav-item">Kontakt</p>
        </div>
        <div class="nav-close">
          <button class="nav-close-button">X</button>
        </div>
      </div>
    `;

  navigationMenu.innerHTML = html;
}
