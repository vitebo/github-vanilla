import { newE2EPage } from '@stencil/core/testing';

describe('b-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-list></b-list>');

    const element = await page.find('b-list');
    expect(element).toHaveClass('hydrated');
  });
});
