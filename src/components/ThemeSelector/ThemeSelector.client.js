import { theme } from '@assets/js';

class ThemeSelector extends HTMLElement {
  /** @typedef {'system' | 'dark' | 'light'} selectedTheme */
  // selectedTheme = cookies.get('theme') || 'system';

  constructor() {
    super();

    
    // console.log(this.selectedTheme);
    
    const links = this.querySelectorAll('a');

    links.forEach(link => link.addEventListener('click', this.changeTheme));
  }

  changeTheme = async (event) => {
    const { target } = event;

    event.preventDefault();
    
    const response = await fetch(`${target.href}&redirect=false`);
    
    theme.reload();
  }
}

customElements.define('theme-selector', ThemeSelector);