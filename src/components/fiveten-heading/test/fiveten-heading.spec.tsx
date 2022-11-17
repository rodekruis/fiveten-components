import { newSpecPage } from '@stencil/core/testing';
import { FivetenHeading } from '../fiveten-heading';

describe('fiveten-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FivetenHeading],
      html: `<fiveten-heading></fiveten-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <fiveten-heading>
        <mock:shadow-root>
          <h2>
            <slot></slot>
          </h2>
        </mock:shadow-root>
      </fiveten-heading>
    `);
  });
});
