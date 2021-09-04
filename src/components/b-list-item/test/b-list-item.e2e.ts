import { newE2EPage } from '@stencil/core/testing';

describe('b-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-list-item></b-list-item>');

    const element = await page.find('b-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
