import { newE2EPage } from '@stencil/core/testing';

describe('b-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-text></b-text>');

    const element = await page.find('b-text');
    expect(element).toHaveClass('hydrated');
  });
});
