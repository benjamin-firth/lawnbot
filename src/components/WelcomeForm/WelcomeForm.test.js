import React from 'react';
import WelcomeForm from './WelcomeForm';
import { shallow } from 'enzyme';

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn()
}));

describe('WelcomeForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WelcomeForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});