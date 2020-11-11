import React from 'react';
import { shallow } from 'enzyme';
import LawnPreviewCard from './LawnPreviewCard';

describe('LawnPreviewCard', () => {
  let wrapper;
  const beforePic = 'testUrl';
  const afterPic = 'testUrl';
  const location = 'testLocation';
  const services = ['test service one', 'test two'];

  beforeEach(() => {
    wrapper = shallow(
      <LawnPreviewCard 
        beforePic={beforePic} 
        afterPic={afterPic} 
        location={location} 
        services={services} 
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});