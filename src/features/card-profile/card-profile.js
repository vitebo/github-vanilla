import componentSetup from '../../utils/component-setup';
import searchUser from '../../services/search-user';
import searchRepos from '../../services/search-repos';
import searchStarredRepos from '../../services/search-starred-repos';
import setupButton from './setup-button';
import createList from './create-list';
import html from './card-profile.html';
import css from './card-profile.style.css';
import tokens from '../../styles/tokens.css';

class CardProfile extends HTMLElement {
  static get observedAttributes() {
    return ['username'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const { styleSheet, template } = componentSetup(html, css);

    const styleSheetToken = new CSSStyleSheet();
    styleSheetToken.replaceSync(tokens);
    styleSheet.push(styleSheetToken);

    this.shadowRoot.adoptedStyleSheets = styleSheet;
    this.shadowRoot.appendChild(template);
  }

  async connectedCallback() {
    if (!this.username) throw new Error('attribute username is required');
    const user = await searchUser({ username: this.username });
    this.setupAvatar(user);
    this.setupUserInfo(user);
    this.setupRepoList();
    this.setupStarredRepoList();
    this.setupBtnRepositories();
    this.setupBtnStarredRepositories();
  }

  setupAvatar(user) {
    const avatar = document.createElement('b-avatar');
    avatar.classList.add('card-profile__avatar');
    avatar.setAttribute('username', this.username);
    avatar.setAttribute('href', user.htmlUrl);
    avatar.setAttribute('src', user.avatarUrl);
    const target = this.shadowRoot.querySelector('[data-js="avatar"]');
    target.replaceWith(avatar);
  }

  setupUserInfo(user) {
    [
      {
        selector: '[data-js="repositories-count"]',
        count: user.publicRepos,
      },
      {
        selector: '[data-js="followers-count"]',
        count: user.followers,
      },
      {
        selector: '[data-js="following-count"]',
        count: user.following,
      },
    ].forEach(({ selector, count }) => {
      const element = this.shadowRoot.querySelector(selector);
      const text = document.createTextNode(count);
      element.appendChild(text);
    });
  }

  async setupRepoList() {
    const repos = await searchRepos({ username: this.username });
    this.repoList = await createList(repos);
    this.replaceList(this.repoList);
  }

  async setupStarredRepoList() {
    const repos = await searchStarredRepos({ username: this.username });
    this.starredRepoList = await createList(repos);
  }

  setupBtnRepositories() {
    const button = setupButton({ buttonName: 'repositories' });
    button.addEventListener('click', () => {
      this.replaceList(this.repoList);
    });
    this.shadowRoot.querySelector('.card-profile__actions').appendChild(button);
  }

  setupBtnStarredRepositories() {
    const button = setupButton({ buttonName: 'starred' });
    button.addEventListener('click', () => {
      this.replaceList(this.starredRepoList);
    });
    this.shadowRoot.querySelector('.card-profile__actions').appendChild(button);
  }

  replaceList(newList) {
    const list = this.shadowRoot.querySelector('b-list');
    list.replaceWith(newList);
  }

  get username() {
    return this.getAttribute('username');
  }
}

export default () => customElements.define('card-profile', CardProfile);
