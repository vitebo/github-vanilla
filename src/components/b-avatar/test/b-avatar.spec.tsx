import { newSpecPage } from '@stencil/core/testing';
import { BAvatar } from '../b-avatar';

describe('b-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BAvatar],
      html: `<b-avatar></b-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <b-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </b-avatar>
    `);
  });
});
