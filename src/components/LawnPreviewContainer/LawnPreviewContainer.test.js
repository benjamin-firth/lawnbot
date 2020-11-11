import React from 'react';
import LawnPreviewContainer from './LawnPreviewContainer';
import { shallow } from 'enzyme';

jest.mock("react-redux", () => ({
  useSelector: () => [{currentYardSize: 1000}],
}));

describe('LawnPreviewContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LawnPreviewContainer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});