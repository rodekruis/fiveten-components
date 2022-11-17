import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fiveten-heading',
  styleUrl: 'fiveten-heading.css',
  shadow: true,
})
export class FivetenHeading {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
