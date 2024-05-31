class FooterElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <ul>
                <li>Alif Faturahman Firdaus &copy; 2024 - Restaurant Catalogue + PWA (Submission 2)</li>
            </ul>
        </footer>
        `;
  }
}
customElements.define('footer-custom', FooterElement);
