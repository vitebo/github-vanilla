import componentSetup from '../../utils/component-setup';
import createNodeFactory from '../../utils/create-node-factory';
import createNodes from '../../utils/create-nodes';
import html from './b-list.html';
import css from './b-list.style.css';

class BList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet, template } = componentSetup(html, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
    this.shadowRoot.appendChild(template);
  }

  connectedCallback() {
    const listItemFactory = createNodeFactory({
      elementType: 'li',
      cssClass: 'b-list__item',
    });
    const $listItems = createNodes(listItemFactory, this.slotNames);
    this.shadowRoot.firstChild.replaceChildren($listItems);
  }

  get slotNames() {
    const slotList = [...this.querySelectorAll('[slot]')];
    return slotList.map((slotNode) => slotNode.getAttribute('slot'));
  }
}

export default () => customElements.define('b-list', BList);
