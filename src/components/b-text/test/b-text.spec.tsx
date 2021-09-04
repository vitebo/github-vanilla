import { newSpecPage } from '@stencil/core/testing';
import { BText } from '../b-text';

describe('b-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BText],
      html: `<b-text></b-text>`,
    });
    expect(page.root).toEqualHtml(`
      <b-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-text>
    `);
  });
});
