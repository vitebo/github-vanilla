import componentSetup from '../../utils/component-setup';
import updateNodeName from '../../utils/update-node-name';
import shouldBeOneOf from '../../validators/should-be-one-of';
import html from './b-card.html';
import css from './b-card.style.css';

class BCard extends HTMLElement {
  static get observedAttributes() {
    return ['tag'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet, template } = componentSetup(html, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
    this.shadowRoot.appendChild(template);
  }

  attributeChangedCallback(attribute) {
    shouldBeOneOf(BCard.observedAttributes, attribute);
    this.updateNodeName();
  }

  updateNodeName() {
    const validTagNames = ['div', 'section', 'article'];
    shouldBeOneOf(validTagNames, this.tag);
    updateNodeName(this.shadowRoot.firstChild, this.tag);
  }

  get tag() {
    return this.getAttribute('tag');
  }
}

export default () => customElements.define('b-card', BCard);
