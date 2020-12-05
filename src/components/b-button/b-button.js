import componentSetup from '../../utils/component-setup';
import css from './b-button.style.css';

class BButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet } = componentSetup(null, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
  }

  connectedCallback() {
    this.setupButton();
  }

  setupButton() {
    const button = document.createElement('button');
    button.classList.add('b-button');
    button.appendChild(BButton.setupSlot());
    this.shadowRoot.appendChild(button);
  }

  static setupSlot() {
    return document.createElement('slot');
  }
}

export default () => customElements.define('b-button', BButton);
