import { isObject } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
        order: stringOrNumberProp,
        offset: stringOrNumberProp
    })
]);

const propTypes = {
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    widths: PropTypes.array,

    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
    tag: 'div',
    widths: colWidths
};

const getColumnSizeClass = (isXs, colWidth, colSize) => {
    if (colSize === true || colSize === '') {
        return isXs ? 'col' : `col-${colWidth}`;
    } else if (colSize === 'auto') {
        return isXs ? 'col-auto' : `col-${colWidth}-auto`;
    }

    return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Col = (props) => {
    const {
        className,
        widths,
        tag: Tag,
        ...attributes
    } = props;

    const colClasses = [];

    widths.forEach((colWidth, i) => {
        let columnProp = props[colWidth];

        delete attributes[colWidth];

        if (!columnProp && columnProp !== '') {
            return;
        }

        const isXs = !i;

        if (isObject(columnProp)) {
            const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

            colClasses.push(classNames({
                [colClass]: columnProp.size || columnProp.size === '',
                [`order${colSizeInterfix}${columnProp.order}`]: columnProp.order || columnProp.order === 0,
                [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset || columnProp.offset === 0
            }));
        } else {
            const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
            colClasses.push(colClass);
        }
    });

    if (!colClasses.length) {
        colClasses.push('col');
    }

    const classes = cx(
        className,
        colClasses
    );

    return (
        <Tag {...attributes} className={classes} />
    );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
