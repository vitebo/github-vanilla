import { Component, h } from '@stencil/core';

@Component({
  tag: 'b-button',
  styleUrl: 'b-button.css',
  shadow: true,
})
export class BButton {

  render() {
    return (
      <button class="b-button">
        <slot></slot>
      </button>
    );
  }

}
