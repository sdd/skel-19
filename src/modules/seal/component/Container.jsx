import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const propTypes = {
    fluid: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
    tag: 'div',
    fluid: false
};

/* TODO:

 * Dont necessarily need className
 * add theme breakpoints and specify max-width for each BP. only use the max-widths when fluid=false
*/

const styles = ({ gridGutter = 0 }) => {
    tag: ({ fluid }) => ({
        width: '100%',
        paddingLeft: gridGutter / 2,
        paddingRight: gridGutter / 2,
        marginLeft: 'auto',
        marginRight: 'auto'
    })
};

const Container = (props) => {
    const {
        classes,
        fluid,
        tag: Tag,
        ...attributes
    } = props;

    return (
        <Tag {...attributes} className={ classes.tag } />
    );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default withStyles(styles)(Container);
