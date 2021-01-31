import { html, css, LitElement } from 'lit-element';

export class BList extends LitElement {
  static styles = css`
    :host {
      all: initial;
      display: block;
    }

    .b-list {
      padding-left: 0;
      margin: 0;
      list-style: none;
    }

    .b-list__item {
      --font-line-height-default: var(--font-line-height-high);

      display: flex;
      align-items: center;
      background-color: var(--color-background-primary);
    }

    .b-list__item:nth-child(even) {
      background-color: var(--color-background-neutral-light);
    }
  `;

  get slotNames() {
    const slotList = Array.from(this.querySelectorAll('[slot]'));
    return slotList.map((slotNode) => slotNode.getAttribute('slot'));
  }

  render() {
    return html`
      <ul class='b-list'>
        ${this.slotNames.map(slotName => html`
          <li class='b-list__item'>
            <slot .name='${slotName}'></slot>
          </li>
        `)}
      </ul>
    `;
  }
}
