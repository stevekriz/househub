import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import ModalRatings from '../src/components/ModalRatings';

Enzyme.configure({ adapter: new Adapter() });

describe('ModalRatings', () => {
  it('should render the ratings passed in as a prop', () => {
    expect(
      render(
        <ModalRatings
          ratings={[
            ['Cleanliness', '0.2'],
            ['Accuracy', '5.0'],
            ['Communication', '1.8'],
            ['Location', '1.3'],
            ['Check-in', '3.9'],
            ['Value', '0.8'],
          ]}
        />
      ).text()
    ).toEqual(
      'Cleanliness0.2Accuracy5.0Communication1.8Location1.3Check-in3.9Value0.8'
    );
  });
});
