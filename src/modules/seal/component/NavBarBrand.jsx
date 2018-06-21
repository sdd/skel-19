import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string,
};

const defaultProps = {
    tag: 'a'
};

const NavBarBrand = (props) => {
    const {
        className,
        tag: Tag,
        ...attributes
    } = props;

    const classes = classNames(
        className,
        'navbar-brand'
    );

    return (
        <Tag {...attributes} className={classes} />
    );
};

NavBarBrand.propTypes = propTypes;
NavBarBrand.defaultProps = defaultProps;

export default NavBarBrand;
