import { InvolvesProjectPage } from './app.po';

describe('involves-project App', () => {
  let page: InvolvesProjectPage;

  beforeEach(() => {
    page = new InvolvesProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
