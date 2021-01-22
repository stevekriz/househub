import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ModalSearch from '../src/components/ModalSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('Search', () => {
  const handleInputChange = jest.fn();
  it('should render the component', () => expect(shallow(<ModalSearch handleInputChange={handleInputChange} />).exists()).toBe(true));
});
