import { convertDateFormatForTest as convertDateFormat } from './mainPageHelper';

describe('Unit test for convertDateFormat', () => {
  it('return a dd-mm-yyyy format ', () => {
    expect(
      convertDateFormat('Fri Dec 09 1994 18:04:18 GMT+0800 (Malaysia Time)'),
    ).toEqual({
      dateISOFromat: '1994-12-09T10:04:18.000Z',
      dateDisplayFormat: '09-12-1994',
    });
  });
});
