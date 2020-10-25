import html from './b-button.html';
import styles from './b-button.style.css';

const template = document.createElement('template');
template.innerHTML = html;

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

class BButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default () => customElements.define('b-button', BButton);
