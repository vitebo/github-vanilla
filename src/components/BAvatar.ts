import { html, css, LitElement, property } from 'lit-element';

export class BAvatar extends LitElement {
  static styles = css`
    :host {
      --b-avatar-size: 160px;

      all: initial;
      display: inline-block;
    }

    .b-avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    .b-avatar__image {
      width: var(--b-avatar-size);
      border-radius: var(--border-radius-circle);
    }

    .b-avatar-username {
      --b-link-padding: var(--space-micro) var(--space-small);

      margin-top: var(--space-small);
    }
  `;

  @property({ type: String }) src = undefined;

  @property({ type: String }) username = undefined;

  @property({ type: String }) href = undefined;

  render() {
    return html`
      <div class='b-avatar'>
        <img class='b-avatar__image' .src='${this.src}' .alt='${this.username}'>
        <b-link class='b-avatar-username' .href='${this.href}'>
          ${this.username}
        </b-link>
      </div>
    `;
  }
}
