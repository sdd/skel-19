import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Base } from 'react-iotacss';

import './Button.scss';

const propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    outline: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,

    children: PropTypes.node,
    className: PropTypes.string,
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
    color: 'secondary',
    tag: 'button',
};

class Button extends Component {

    onClick = e => {
        const { disabled, onClick } = this.props;

        if (disabled) {
            e.preventDefault();
            return;
        }

        onClick && onClick(e);
    };

    render() {
        const {
            active,
            block,
            className,
            color,
            icon,
            innerRef,
            outline,
            size,
            tag,
            ...attributes
        } = this.props;

        const classes = cx(
            className,
            'btn',
            `btn${outline ? '-outline' : ''}-${color}`,
            size ? `btn-${size}` : false,
            block ? 'btn-block' : false,
            { active, disabled: this.props.disabled }
        );

        const Tag = attributes.href && tag === 'button' ? 'a' : tag;

        if (icon) {
            children.unshift(<i className="button-icon">{icon}</i>);
        }

        return (
            <Base
                tagName={Tag}
                type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
                {...attributes}
                className={classes}
                ref={innerRef}
                onClick={this.onClick}
            >
                { icon ? <i className="button-icon">{icon}</i> : null }
            </Base>
        )
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

