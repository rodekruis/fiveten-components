import { newE2EPage } from '@stencil/core/testing';

describe('fiveten-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fiveten-heading></fiveten-heading>');

    const element = await page.find('fiveten-heading');
    expect(element).toHaveClass('hydrated');
  });
});
