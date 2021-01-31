import { html, css, LitElement } from 'lit-element';

export class BTitle extends LitElement {
  static styles = css`
    :host {
      all: initial;
      display: inline-block;
      contain: content;
    }

    .b-title {
      margin: 0;
      color: var(--color-font-primary);
      font-family: var(--font-family-default);
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-medium);
      line-height: var(--font-line-height-default);
    }
  `;

  render() {
    return html`
      <h1 class='b-title'>
        <slot></slot>
      </h1>
    `;
  }
}
