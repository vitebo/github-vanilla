import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'b-avatar',
  styleUrl: 'b-avatar.css',
  shadow: true,
})
export class BAvatar {
  @Prop() src!: string;

  @Prop() href!: string;

  @Prop() username!: string;

  render() {
    return (
      <div class="b-avatar">
        <img
          class="b-avatar__image"
          src={this.src}
          alt={this.username}
        />

        <b-link
          class="b-avatar-username"
          href={this.href}
        >
          {this.username}
        </b-link>
      </div>
    );
  }

}
