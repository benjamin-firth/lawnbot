import { yardSizeReducer } from '../yardSizeReducer';

describe('yardSizeReducer', () => {
  it('should return the initial state', () => {
    const expected = null;

    const result = yardSizeReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is CHANGE_SIZE', () => {
    const initialState = null;
    const sqft = 1000;
    const expected = 1000;

    const action = {
      type: 'CHANGE_SIZE',
      sqft
    };

    const result = yardSizeReducer(initialState, action);

    expect(result).toEqual(expected);
  });
});