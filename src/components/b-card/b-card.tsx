import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'b-card',
  styleUrl: 'b-card.css',
  shadow: true,
})
export class BCard {
  @Prop() tag: (
    | 'div'
    | 'section'
    | 'article'
  ) = 'div';

  render() {
    const Component = this.tag;

    return (
      <Component class="b-card">
        <slot></slot>
      </Component>
    );
  }

}
