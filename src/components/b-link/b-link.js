import componentSetup from '../../utils/component-setup';
import updateShadowDomAttribute from '../../utils/update-shadow-dom-attribute';
import updateShadowDomClass from '../../utils/update-shadow-dom-class';
import shouldBeOneOf from '../../validators/should-be-one-of';
import html from './b-link.html';
import css from './b-link.style.css';

class BLink extends HTMLElement {
  static get observedAttributes() {
    return ['href', 'target', 'upper-case'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet, template } = componentSetup(html, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
    this.shadowRoot.appendChild(template);
  }

  connectedCallback() {
    if (!this.href) throw new Error('attribute alt is required');
    if (!this.target) this.target = '_self';
  }

  attributeChangedCallback(attribute) {
    shouldBeOneOf(BLink.observedAttributes, attribute);
    switch (attribute) {
      case 'target':
        return this.updateTarget();
      case 'upper-case':
        return this.updateUpperCase();
      default:
        return updateShadowDomAttribute(this, attribute);
    }
  }

  updateTarget() {
    shouldBeOneOf(['_blank', '_self', '_parent', '_top'], this.target);
    return updateShadowDomAttribute(this, 'target');
  }

  updateUpperCase() {
    return updateShadowDomClass(this, {
      className: 'b-link--upper-case',
      state: this.upperCase,
    });
  }

  get href() {
    return this.getAttribute('href');
  }

  get target() {
    return this.getAttribute('target');
  }

  set target(value) {
    return this.setAttribute('target', value);
  }

  get upperCase() {
    return this.hasAttribute('upper-case');
  }
}

export default () => customElements.define('b-link', BLink);
