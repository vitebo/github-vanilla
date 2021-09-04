import { newE2EPage } from '@stencil/core/testing';

describe('b-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-title></b-title>');

    const element = await page.find('b-title');
    expect(element).toHaveClass('hydrated');
  });
});
