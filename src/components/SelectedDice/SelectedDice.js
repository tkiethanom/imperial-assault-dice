import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';

import './SelectedDice.scss';

import Dice from 'components/Dice/Dice';

class SelectedDice extends Component {
    blockClass = 'selected-dice';

    render() {
        return (
            <div className={`${this.blockClass} col-xs-12 col-sm-6 col-md-6`}>
                <p>Selected Dice</p>

                <div className={`${this.blockClass}__inner`}>
                    {this.props.Dice.selected.map((item, i) => {
                        return (
                            <Dice
                                key={i}
                                index={i}
                                diceData={item}
                                {...this.props}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

SelectedDice.propTypes = {
    Dice: PropTypes.shape({ selected: PropTypes.array }),
};

export default connect(state => ({ Dice: state.Dice }))(SelectedDice);
