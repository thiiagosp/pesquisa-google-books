import { SearchProjectPage } from './app.po';

describe('search-project App', () => {
  let page: SearchProjectPage;

  beforeEach(() => {
    page = new SearchProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
