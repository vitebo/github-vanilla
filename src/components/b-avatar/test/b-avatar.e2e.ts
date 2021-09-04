import { newE2EPage } from '@stencil/core/testing';

describe('b-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<b-avatar></b-avatar>');

    const element = await page.find('b-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
