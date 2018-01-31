import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SelectedDice.scss';

import Dice from 'components/Dice/Dice';

class SelectedDice extends Component {
    blockClass = 'selected-dice';

    render() {
        return (
            <div className={`${this.blockClass} col-xs-12 col-sm-6 col-md-6`}>
                <p>Selected Dice</p>

                <div className={`${this.blockClass}__inner`}>
                    {this.props.selected.map((item, i) => {
                        return (
                            <Dice
                                key={i}
                                index={i}
                                diceData={item}
                                onRemove={this.props.onRemove}
                                onReroll={this.props.onReroll}
                                isRolling={item.isRolling}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

SelectedDice.propTypes = {
    selected: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
    onReroll: PropTypes.func.isRequired,
};

export default SelectedDice;
