import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    type: PropTypes.string
};

const defaultProps = {
    tag: 'button',
    type: 'button'
};

const NavBarToggler = (props) => {
    const {
        className,
        children,
        tag: Tag,
        ...attributes
    } = props;

    const classes = classNames(
        className,
        'navbar-toggler'
    );

    return (
        <Tag {...attributes} className={classes}>
            { children || <span className='navbar-toggler-icon' /> }
        </Tag>
    );
};

NavBarToggler.propTypes = propTypes;
NavBarToggler.defaultProps = defaultProps;

export default NavBarToggler;
