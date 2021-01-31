import { html, fixture, expect } from '@open-wc/testing';

import { GithubCardProfile } from '../src/GithubCardProfile.js';
import '../github-card-profile.js';

describe('GithubCardProfile', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<GithubCardProfile>(html`<github-card-profile></github-card-profile>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<GithubCardProfile>(html`<github-card-profile></github-card-profile>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<GithubCardProfile>(html`<github-card-profile title="attribute title"></github-card-profile>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<GithubCardProfile>(html`<github-card-profile></github-card-profile>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
