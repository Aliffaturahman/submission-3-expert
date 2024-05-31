class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
          <div id="navbarId" class="navbar">
            <div class="headerInner">
              <h1 class="headerTitle">
                Cuisine Chaser
              </h1>
              <ul class="navigationResponsive">
                <li>
                  <button id="navigationDrawerId" class="navigationDrawer" aria-label="Open navigation drawer">
                    ☰
                  </button>
                </li>
              </ul>
            </div>
            <nav id="navbarContainerId" class="navbarContainer">
              <ul class="navbarList">
                <li class="navbarItem"><a href="index.html">Home</a></li>
                <li class="navbarItem"><a href="#/favorite">Favorite</a></li>
                <li class="navbarItem"><a href="https://www.linkedin.com/in/alif-faturahman-firdaus-150a482a3">About Us</a></li>
              </ul>
            </nav>
          </div>
          <div class="hero">
            <div class="heroContainer">
              <h2 class="heroTitle">Cuisine Chaser</h2>
              <p class="heroDescription">Discover restaurants with delicious flavors in Indonesia</p>
              <a href="#mainContent" class="btn">Read More</a>
            </div>
          </div>
        </header>
      `;
  }
}
customElements.define('header-custom', HeaderElement);
