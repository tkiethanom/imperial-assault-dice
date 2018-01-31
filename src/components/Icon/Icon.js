import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';

class Icon extends Component {
    blockClass = 'icon';

    render() {
        return (
            <span
                className={`${this.blockClass} ${this.blockClass}--${
                    this.props.type
                } ${this.props.iconClassName || ''}`}
            />
        );
    }
}

Icon.propTypes = {
    type: PropTypes.oneOf([
        'damage',
        'surge',
        'accuracy',
        'block',
        'evade',
        'dodge',
    ]),
    iconClassName: PropTypes.string,
};

export default Icon;
