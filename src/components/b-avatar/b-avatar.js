import componentSetup from '../../utils/component-setup';
import updateShadowDomAttribute from '../../utils/update-shadow-dom-attribute';
import shouldBeOneOf from '../../validators/should-be-one-of';
import html from './b-avatar.html';
import css from './b-avatar.style.css';

class BAvatar extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'alt'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet, template } = componentSetup(html, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
    this.shadowRoot.appendChild(template);
  }

  connectedCallback() {
    if (!this.alt) throw new Error('attribute alt is required');
    if (!this.src) throw new Error('attribute src is required');
  }

  attributeChangedCallback(attribute) {
    shouldBeOneOf(BAvatar.observedAttributes, attribute);
    updateShadowDomAttribute(this, attribute);
  }

  get alt() {
    return this.getAttribute('alt');
  }

  get src() {
    return this.getAttribute('src');
  }
}

export default () => customElements.define('b-avatar', BAvatar);
