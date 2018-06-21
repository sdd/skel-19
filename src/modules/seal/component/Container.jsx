import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
    className: PropTypes.string,
    fluid: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.string
};

const defaultProps = {
    tag: 'div',
    fluid: false
};

const Container = (props) => {
    const {
        className,
        fluid,
        tag: Tag,
        ...attributes
    } = props;

    const classes = cx(
        className,
        'container',
        fluid
    );

    return (
        <Tag {...attributes} className={classes} />
    );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
