import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        <stencil-slot-bug-poc>
          <span slot="header">Header</span>
          Body
        </stencil-slot-bug-poc>
      </Host>
    );
  }
}
