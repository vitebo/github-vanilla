import { Component, h } from '@stencil/core';

@Component({
  tag: 'b-list-item',
  styleUrl: 'b-list-item.css',
  shadow: true,
})
export class BListItem {

  render() {
    return (
      <li class="b-list-item">
        <slot></slot>
      </li>
    );
  }

}
