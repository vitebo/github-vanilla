import { html, css, LitElement, property } from 'lit-element';

export class BLink extends LitElement {
  static styles = css`

    :host {
      --b-link-text-indent: 0;
      --b-link-padding: 0;
      --b-link-width: auto;

      all: initial;
      display: inline-block;
    }

    .b-link {
      display: inline-block;
      width: var(--b-link-width);
      padding: var(--b-link-padding);
      color: var(--color-font-primary);
      font-family: var(--font-family-default);
      font-size: var(--font-size-medium);
      font-weight: var(--font-weight-medium);
      line-height: var(--font-line-height-default);
      text-indent: var(--b-link-text-indent);
      vertical-align: bottom;
    }

    .b-link:hover,
    .b-link:focus {
      color: var(--color-primary);
    }

    .b-link--upper-case {
      text-transform: uppercase;
    }
  `;

  @property({ type: String })
  href = undefined;

  @property({ type: String })
  target: (
    | '_self'
    | '_blank'
    | '_parent'
    | '_top'
  ) = '_self';

  @property({ type: Boolean })
  uppercase = false;

  get cssClass() {
    return {
      'b-link': true,
      '.b-link--upper-case': this.uppercase,
    };
  }

  render() {
    return html`
      <a .class='${this.cssClass}' .href='${this.href}' .target='${this.target}'>
        <slot></slot>
      </a>
    `;
  }
}
