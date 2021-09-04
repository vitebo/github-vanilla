import { Component, h } from '@stencil/core';

@Component({
  tag: 'b-list',
  styleUrl: 'b-list.css',
  shadow: true,
})
export class BList {

  render() {
    return (
      <ul class="b-list">
        <slot></slot>
      </ul>
    );
  }

}
