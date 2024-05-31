class MainContentElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main>
          <div id="mainContent" class="mainContentContainer"></div>
        </main>
      `;
  }
}

customElements.define('main-custom', MainContentElement);
