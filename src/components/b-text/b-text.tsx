import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'b-text',
  styleUrl: 'b-text.css',
  shadow: true,
})
export class BText {
  @Prop() tag: (
    | 'p'
    | 'span'
    | 'strong'
  ) = 'span';

  render() {
    const Component = this.tag;

    return (
      <Component class="b-text">
        <slot></slot>
      </Component>
    );
  }

}
