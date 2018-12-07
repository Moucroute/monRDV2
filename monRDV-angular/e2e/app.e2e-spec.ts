import { MonRDVAngularPage } from './app.po';

describe('mon-rdv-angular App', function() {
  let page: MonRDVAngularPage;

  beforeEach(() => {
    page = new MonRDVAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
