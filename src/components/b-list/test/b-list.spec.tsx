import { newSpecPage } from '@stencil/core/testing';
import { BList } from '../b-list';

describe('b-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BList],
      html: `<b-list></b-list>`,
    });
    expect(page.root).toEqualHtml(`
      <b-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-list>
    `);
  });
});
