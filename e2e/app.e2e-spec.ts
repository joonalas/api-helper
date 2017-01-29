import { APIHelperPage } from './app.po';

describe('api-helper App', function() {
  let page: APIHelperPage;

  beforeEach(() => {
    page = new APIHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
