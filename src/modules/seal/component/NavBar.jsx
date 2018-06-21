import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    full: PropTypes.bool,
    fixed: PropTypes.string,
    sticky: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const defaultProps = {
    tag: 'nav',
    expand: false,
};

const getExpandClass = (expand) => {
    if (expand === false) {
        return false;
    } else if (expand === true || expand === 'xs') {
        return 'navbar-expand';
    }

    return `navbar-expand-${expand}`;
};

const Navbar = (props) => {
    const {
        expand,
        className,
        fixed,
        sticky,
        color,
        tag: Tag,
        ...attributes
    } = props;

    const classes = classNames(
        className,
        'navbar',
        getExpandClass(expand),
        {
            [`bg-${color}`]: color,
            [`fixed-${fixed}`]: fixed,
            [`sticky-${sticky}`]: sticky,
        }
    );

    return (
        <Tag {...attributes} className={classes} />
    );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
