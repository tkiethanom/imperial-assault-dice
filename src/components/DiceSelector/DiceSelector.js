import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import './DiceSelector.scss';
import { selectDice } from 'actions/Dice/DiceActions';

class DiceSelector extends Component {
    blockClass = 'dice-selector';

    selectDice = e => {
        const index = e.currentTarget.getAttribute('data-index');

        this.props.dispatch(selectDice(index));
    };

    render() {
        const selectableDiceClass = `${this.blockClass}__selectable-dice`;

        return (
            <div className={`${this.blockClass} container-fluid`}>
                <p>Select your Dice</p>
                <div className={`${this.blockClass}__inner`}>
                    <div className={`${this.blockClass}__row`}>
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--blue`}
                            data-color="blue"
                            data-index="0"
                            onClick={this.selectDice}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--red`}
                            data-color="red"
                            data-index="1"
                            onClick={this.selectDice}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--yellow`}
                            data-color="yellow"
                            data-index="2"
                            onClick={this.selectDice}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--green`}
                            data-color="green"
                            data-index="3"
                            onClick={this.selectDice}
                        />
                        <div className="clearfix" />
                    </div>
                    <div className={`${this.blockClass}__row`}>
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--white`}
                            data-color="white"
                            data-index="4"
                            onClick={this.selectDice}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--black`}
                            data-color="black"
                            data-index="5"
                            onClick={this.selectDice}
                        />

                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        );
    }
}

DiceSelector.propTypes = {
    dispatch: PropTypes.func,
};

export default connect()(DiceSelector);
