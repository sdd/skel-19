import { configure } from '@storybook/react';
const req = require.context('../src/modules/seal/component/', true, /\.story\.js$/);


function loadStories() {
    require('../styles/main.scss');
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
