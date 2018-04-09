import { describe } from 'ava-spec';
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import App from './index';

describe('App component', it => {

    it('renders correctly', t => {

        const comp = shallow(<App />);
        t.truthy(comp);
    });
});
