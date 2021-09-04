import { newSpecPage } from '@stencil/core/testing';
import { BButton } from '../b-button';

describe('b-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BButton],
      html: `<b-button></b-button>`,
    });
    expect(page.root).toEqualHtml(`
      <b-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-button>
    `);
  });
});
