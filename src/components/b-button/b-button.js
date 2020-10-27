import componentSetup from '../../utils/component-setup';
import html from './b-button.html';
import css from './b-button.style.css';

class BButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet, template } = componentSetup(html, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
    this.shadowRoot.appendChild(template);
  }
}

export default () => customElements.define('b-button', BButton);
