import componentSetup from '../../utils/component-setup';
import shouldBeOneOf from '../../validators/should-be-one-of';
import css from './b-avatar.style.css';

class BAvatar extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'username', 'href'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet } = componentSetup(null, css);
    this.shadowRoot.adoptedStyleSheets = styleSheet;
  }

  connectedCallback() {
    if (!this.src) throw new Error('attribute src is required');
    if (!this.username) throw new Error('attribute username is required');
    if (!this.href) throw new Error('attribute href is required');
    this.setupAvatar();
  }

  attributeChangedCallback(attribute) {
    shouldBeOneOf(BAvatar.observedAttributes, attribute);
    switch (attribute) {
      case 'src':
        return this.updateSrc();
      case 'username':
        return this.updateUsername();
      case 'href':
        return this.updateHref();
      default: return null;
    }
  }

  setupAvatar() {
    const avatar = document.createElement('div');
    avatar.classList.add('b-avatar');
    avatar.appendChild(this.setupImage());
    avatar.appendChild(this.setupLink());
    this.shadowRoot.appendChild(avatar);
  }

  setupImage() {
    const image = document.createElement('img');
    image.classList.add('b-avatar__image');
    image.setAttribute('src', this.src);
    image.setAttribute('alt', this.username);
    return image;
  }

  setupLink() {
    const link = document.createElement('b-link');
    link.classList.add('b-avatar-username');
    link.setAttribute('href', this.href);
    const text = document.createTextNode(this.username);
    link.appendChild(text);
    return link;
  }

  updateSrc() {
    const image = this.shadowRoot.querySelector('img');
    if (!image) return;
    image.setAttribute('src', this.src);
  }

  updateUsername() {
    const link = this.shadowRoot.querySelector('b-link');
    const image = this.shadowRoot.querySelector('img');
    if (!link || !image) return;
    const text = document.createTextNode(this.username);
    link.replaceChildren(text);
    image.setAttribute('alt', this.username);
  }

  updateHref() {
    const link = this.shadowRoot.querySelector('b-link');
    if (!link) return;
    link.setAttribute('href', this.href);
  }

  get src() {
    return this.getAttribute('src');
  }

  get username() {
    return this.getAttribute('username');
  }

  get href() {
    return this.getAttribute('href');
  }
}

export default () => customElements.define('b-avatar', BAvatar);
