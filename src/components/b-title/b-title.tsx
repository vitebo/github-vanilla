import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'b-title',
  styleUrl: 'b-title.css',
  shadow: true,
})
export class BTitle {
  @Prop() tag: (
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
  ) = 'h1';

  render() {
    const Component = this.tag;

    return (
      <Component class="b-title">
        <slot></slot>
      </Component>
    );
  }

}
