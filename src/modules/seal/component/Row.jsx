import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
    className: PropTypes.string,
    noGutters: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
    tag: 'div',
    noGutters: false
};

const Row = (props) => {
    const {
        className,
        noGutters,
        tag: Tag,
        ...attributes
    } = props;

    const classes = cx(
        className,
        'row',
        noGutters && 'no-gutters'
    );

    return (
        <Tag {...attributes} className={classes} />
    );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
