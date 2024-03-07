import { theme } from '@assets/js';

class ThemeSelector extends HTMLElement {
  form = this.querySelector('form');

  constructor() {
    super();
  }

  connectedCallback() {
    theme.set();
    this.form.elements[theme.get()].checked = true;

    this.form.onchange = (event) => {
      const { value } = event.target;
      theme.set(value);
    };
  }
}

customElements.define('theme-selector', ThemeSelector);