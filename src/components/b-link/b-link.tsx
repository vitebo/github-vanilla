import { Component, Prop, h } from '@stencil/core';
import classNames from "classnames";

@Component({
  tag: 'b-link',
  styleUrl: 'b-link.css',
  shadow: true,
})
export class BLink {
  @Prop() href!: string;

  @Prop() target: (
    | '_blank'
    | '_self'
    | '_parent'
    | '_top'
  ) = '_self';

  @Prop() upperCase: boolean;

  render() {
    return (
      <a
        class={classNames('b-link', {
          'b-link--upper-case': this.upperCase
        })}
        href={this.href}
      >
        <slot></slot>
      </a>
    );
  }

}
