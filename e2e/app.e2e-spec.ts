import { Train2Page } from './app.po';

describe('train2 App', function() {
  let page: Train2Page;

  beforeEach(() => {
    page = new Train2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
