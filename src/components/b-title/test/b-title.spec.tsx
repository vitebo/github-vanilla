import { newSpecPage } from '@stencil/core/testing';
import { BTitle } from '../b-title';

describe('b-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BTitle],
      html: `<b-title></b-title>`,
    });
    expect(page.root).toEqualHtml(`
      <b-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-title>
    `);
  });
});
