import { newSpecPage } from '@stencil/core/testing';
import { BCard } from '../b-card';

describe('b-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BCard],
      html: `<b-card></b-card>`,
    });
    expect(page.root).toEqualHtml(`
      <b-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-card>
    `);
  });
});
