import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../src/components/Reviews';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews component', () => {
  it('renders header', () => {
    const wrapper = shallow(<Reviews />);
    const header = <h1>Reviews</h1>;
    expect(wrapper.contains(header)).toEqual(true);
  });
});
