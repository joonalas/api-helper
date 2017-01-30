import { StorytimePage } from './app.po';

describe('storytime App', function() {
  let page: StorytimePage;

  beforeEach(() => {
    page = new StorytimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
