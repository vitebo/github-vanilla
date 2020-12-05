import componentSetup from '../../utils/component-setup';
import updateNodeName from '../../utils/update-node-name';
import shouldBeOneOf from '../../validators/should-be-one-of';
import css from './b-card.style.css';

class BCard extends HTMLElement {
  static get observedAttributes() {
    return ['tag'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet } = componentSetup(null, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
  }

  connectedCallback() {
    this.setupCard();
  }

  setupCard() {
    const card = document.createElement(this.tag);
    card.classList.add('b-card');
    card.appendChild(BCard.setupSlot());
    this.shadowRoot.appendChild(card);
  }

  static setupSlot() {
    return document.createElement('slot');
  }

  attributeChangedCallback(attribute) {
    shouldBeOneOf(BCard.observedAttributes, attribute);
    switch (attribute) {
      case 'tag':
        return this.updateNodeName();
      default: return null;
    }
  }

  updateNodeName() {
    const validTagNames = ['div', 'section', 'article'];
    shouldBeOneOf(validTagNames, this.tag);
    updateNodeName(this.shadowRoot.firstChild, this.tag);
  }

  get tag() {
    return this.getAttribute('tag') || 'div';
  }
}

export default () => customElements.define('b-card', BCard);
