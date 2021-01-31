import { html, css, LitElement } from 'lit-element';

export class BCard extends LitElement {
  static styles = css`
    :host {
      all: initial;
      display: block;
    }

    .b-card {
      padding: var(--space-extra-large);
      background-color: var(--color-background-neutral-light);
      border-radius: var(--border-radius-small);
      box-shadow: var(--shadow-elevation-down-10);
    }
  `;

  render() {
    return html`
      <div class='b-card'>
        <slot></slot>
      </div>
    `;
  }
}
