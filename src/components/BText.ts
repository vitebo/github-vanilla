import { html, css, LitElement } from 'lit-element';

export class BText extends LitElement {
  static styles = css`
    :host {
      all: initial;
      display: inline-block;
      contain: content;
    }

    .b-text {
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
      <p class='b-text'>
        <slot></slot>
      </p>
    `;
  }
}
