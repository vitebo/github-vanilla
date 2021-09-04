import { newE2EPage } from '@stencil/core/testing';

describe('b-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-link></b-link>');

    const element = await page.find('b-link');
    expect(element).toHaveClass('hydrated');
  });
});
