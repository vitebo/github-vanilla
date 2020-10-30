import updateNodeName from '../../utils/update-node-name';
import shouldBeOneOf from '../../validators/should-be-one-of';
import componentSetup from '../../utils/component-setup';
import html from './b-title.html';
import css from './b-title.style.css';

class BTitle extends HTMLElement {
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

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'tag') this.updateNodeName(newValue);
  }

  updateNodeName(newTagName) {
    const validTagNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    shouldBeOneOf(validTagNames, newTagName);
    updateNodeName(this.shadowRoot.firstChild, newTagName);
  }
}

export default () => customElements.define('b-title', BTitle);
