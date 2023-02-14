import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fiveten-heading',
  styleUrl: 'fiveten-heading.css',
  shadow: true,
})


export class FivetenHeading {
  @Prop() size: number;

  initSize = (): number => {
    console.log('=== this.size: ', this.size);
    if(!this.size || this.size > 6) {
      return 6;
    }

    if(this.size < 1) {
      return 1
    }

    return this.size
  }
  render() {
    const Tag = `h${this.initSize()}`

    return (
      <Host>
        <Tag>
          <slot></slot>
        </Tag>
      </Host>
    );
  }
}
