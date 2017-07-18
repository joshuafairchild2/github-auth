import { GithubAuthPage } from './app.po';

describe('github-auth App', () => {
  let page: GithubAuthPage;

  beforeEach(() => {
    page = new GithubAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
