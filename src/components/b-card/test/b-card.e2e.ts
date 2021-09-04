import { newE2EPage } from '@stencil/core/testing';

describe('b-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-card></b-card>');

    const element = await page.find('b-card');
    expect(element).toHaveClass('hydrated');
  });
});
