import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { P } from 'react-iotacss';

import '../../../../styles/main.scss';

import Button from '../component/Button';

storiesOf('Button', module)
.add('basic styles', () => (<div>
    <P>With text from children<br />
        <Button onClick={action('clicked')}>Child Text</Button>
    </P>

    <p>
        With text from label prop<br />
        <Button onClick={action('clicked')} label="clickleberry pie" />
    </p>

    <p>Primary ({ `<Button primary>` })<br />
        <Button
            primary
            onClick={action('clicked')}
        >
        Primary
        </Button>
    </p>

</div>))
