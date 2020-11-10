import React from 'react';
import { shallow } from 'enzyme';
import LawnPreviewCard from './LawnPreviewCard';

describe('LawnPreviewCard', () => {
  let wrapper;
  let beforePic = 'testUrl';
  let afterPic = 'testUrl';
  let services = ['test service one', 'test two'];

  beforeEach(() => {
    wrapper = shallow(
      <LawnPreviewCard 
        beforePic={beforePic} 
        afterPic={afterPic} 
        services={services} 
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});