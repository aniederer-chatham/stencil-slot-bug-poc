import { Component, ComponentInterface, Host, State, h } from '@stencil/core';

@Component({
  tag: 'stencil-slot-bug-poc',
  shadow: true,
})
export class StencilBugPoc implements ComponentInterface {
  @State() private hasHeader: boolean = true;
  render() {
    return (
      <Host>
        <button onClick={() => this.hasHeader = !this.hasHeader}>
          hasHeader: {''+this.hasHeader}
        </button>
        <div>
          {this.hasHeader && <div>Header: <slot name="header" /></div>}
          <div>Body: <slot /></div>
        </div>
      </Host>
    );
  }
}
