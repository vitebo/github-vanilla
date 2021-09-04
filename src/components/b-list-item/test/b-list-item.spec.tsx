import { newSpecPage } from '@stencil/core/testing';
import { BListItem } from '../b-list-item';

describe('b-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BListItem],
      html: `<b-list-item></b-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <b-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-list-item>
    `);
  });
});
