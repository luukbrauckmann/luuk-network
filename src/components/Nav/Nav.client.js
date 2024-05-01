class EnhancedNav extends HTMLElement {
  #toggleButten = this.querySelector('.toggle-button');

  constructor() {
    super();
  }

  toggleMenu() {
    if (this.#toggleButten.ariaExpanded === 'true') {
      this.#toggleButten.setAttribute('aria-expanded', 'false');
    } else {
      this.#toggleButten.setAttribute('aria-expanded', 'true');
    }
  }

  connectedCallback() {
    this.#toggleButten.addEventListener('click', () => this.toggleMenu());
  }

  disconnectedCallback() {
    this.#toggleButten.removeEventListener('click', this.toggleMenu);
  }
}

customElements.define('enhanced-nav', EnhancedNav);