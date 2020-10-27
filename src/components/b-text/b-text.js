import updateNodeName from '../../utils/update-node-name';
import shouldBeOneOf from '../../validators/should-be-one-of';
import componentSetup from '../../utils/component-setup';
import html from './b-text.html';
import css from './b-text.style.css';

class BText extends HTMLElement {
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
    const validTagNames = ['p', 'span', 'strong'];
    shouldBeOneOf(validTagNames, newTagName);
    updateNodeName(this.shadowRoot.firstChild, newTagName);
  }
}

export default () => customElements.define('b-text', BText);
