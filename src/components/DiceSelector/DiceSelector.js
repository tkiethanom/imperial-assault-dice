import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DiceSelector.scss';

class DiceSelector extends Component {
    blockClass = 'dice-selector';

    handleClick = e => {
        this.props.onSelectDice(e.currentTarget.getAttribute('data-index'));
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
                            onClick={this.handleClick}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--red`}
                            data-color="red"
                            data-index="1"
                            onClick={this.handleClick}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--yellow`}
                            data-color="yellow"
                            data-index="2"
                            onClick={this.handleClick}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--green`}
                            data-color="green"
                            data-index="3"
                            onClick={this.handleClick}
                        />
                        <div className="clearfix" />
                    </div>
                    <div className={`${this.blockClass}__row`}>
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--white`}
                            data-color="white"
                            data-index="4"
                            onClick={this.handleClick}
                        />
                        <div
                            className={`${selectableDiceClass} ${selectableDiceClass}--black`}
                            data-color="black"
                            data-index="5"
                            onClick={this.handleClick}
                        />

                        <div className="clearfix" />
                    </div>
                </div>
            </div>
        );
    }
}

DiceSelector.propTypes = {
    onSelectDice: PropTypes.func.isRequired,
};

export default DiceSelector;
