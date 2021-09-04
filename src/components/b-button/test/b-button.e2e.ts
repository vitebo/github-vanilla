import { newE2EPage } from '@stencil/core/testing';

describe('b-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-button></b-button>');

    const element = await page.find('b-button');
    expect(element).toHaveClass('hydrated');
  });
});
