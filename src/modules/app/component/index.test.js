import { describe } from 'ava-spec';
import { expect } from 'chai';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './index';

configure({ adapter: new Adapter() });

describe('App component', it => {

    it('renders correctly', t => {

        const comp = shallow(<App />);
        t.truthy(comp);
    });
});
