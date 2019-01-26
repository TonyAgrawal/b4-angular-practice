import { VendormgmtModule } from './vendormgmt.module';

describe('VendormgmtModule', () => {
  let vendormgmtModule: VendormgmtModule;

  beforeEach(() => {
    vendormgmtModule = new VendormgmtModule();
  });

  it('should create an instance', () => {
    expect(vendormgmtModule).toBeTruthy();
  });
});
