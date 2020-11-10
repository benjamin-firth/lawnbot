import { setYardSize } from './index';

describe('actions', () => {
  it('should have a type of CHANGE_SIZE', () => {
    let sqft = 1000;

    const expectedAction = {
      type: 'CHANGE_SIZE',
      sqft
    };

    const result = setYardSize(sqft);

    expect(result).toEqual(expectedAction);
  });
});