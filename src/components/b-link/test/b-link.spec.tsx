import { newSpecPage } from '@stencil/core/testing';
import { BLink } from '../b-link';

describe('b-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BLink],
      html: `<b-link></b-link>`,
    });
    expect(page.root).toEqualHtml(`
      <b-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-link>
    `);
  });
});
