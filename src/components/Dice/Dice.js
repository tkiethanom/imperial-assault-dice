import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
    removeDice,
    rerollDice,
    doneRerolling,
    clearDice,
    calcTotals,
} from 'actions/Dice/DiceActions';
import Icon from 'components/Icon/Icon';

import './Dice.scss';

class Dice extends Component {
    blockClass = 'dice';

    state = {
        isRerolling: false,
    };

    handleRemove = e => {
        this.props.dispatch(
            removeDice(e.currentTarget.getAttribute('data-index')),
        );
        this.props.dispatch(calcTotals());
    };

    handleReroll = e => {
        const context = this;
        const target = e.currentTarget;

        if (!this.state.isRerolling) {
            this.props.dispatch(clearDice(target.getAttribute('data-index')));

            this.setState({ isRerolling: true });
            context.props.dispatch(rerollDice());

            setTimeout(function() {
                context.props.dispatch(
                    doneRerolling(target.getAttribute('data-index')),
                );
                context.props.dispatch(calcTotals());

                context.setState({ isRerolling: false });
            }, 500);
        }
    };

    displayFace = data => {
        if (!data.face) {
            return;
        }

        return (
            <Choose>
                <When condition={data.type === 'offense'}>
                    <div
                        className={`${this.blockClass}__${data.face.damage}d-${
                            data.face.surge
                        }s-${data.face.accuracy}a`}
                    >
                        {data.face.accuracy > 0 ? (
                            <div
                                className={`${this.blockClass}__accuracy ${
                                    this.blockClass
                                }__accuracy--${data.face.accuracy}`}
                            >
                                {data.face.accuracy}
                            </div>
                        ) : null}

                        {this.outputIcons('damage', data.face.damage)}
                        {this.outputIcons('surge', data.face.surge)}
                    </div>
                </When>
                <Otherwise>
                    <div
                        className={`${this.blockClass}__${data.face.block}b-${
                            data.face.evade
                        }e-${data.face.dodge}d`}
                    >
                        {this.outputIcons('dodge', data.face.dodge)}
                        {this.outputIcons('block', data.face.block)}
                        {this.outputIcons('evade', data.face.evade)}
                    </div>
                </Otherwise>
            </Choose>
        );
    };

    outputIcons(type, num) {
        const icons = [];

        for (var i = 0; i < num; i++) {
            icons.push(
                <Icon
                    type={type}
                    iconClassName={`${this.blockClass}__icon ${
                        this.blockClass
                    }__${type} ${this.blockClass}__${type}--${i + 1}`}
                    key={i}
                />,
            );
        }

        return (
            <div className={`${this.blockClass}__${type}-container`}>
                {icons}
            </div>
        );
    }

    render() {
        return (
            <div
                className={`${this.blockClass}`}
                key={this.props.index}
                data-index={this.props.index}
            >
                <div
                    className={`${this.blockClass}__inner ${
                        this.blockClass
                    }__inner--${this.props.diceData.color}`}
                >
                    {this.displayFace(this.props.diceData)}
                </div>

                <div
                    className={`${this.blockClass}__remove`}
                    onClick={this.handleRemove}
                    data-index={this.props.index}
                >
                    <span className="fa-stack">
                        <i className="fa fa-circle fa-stack-2x" />
                        <i className="fa fa-times fa-stack-1x" />
                    </span>
                </div>
                <div
                    className={`${this.blockClass}__reroll`}
                    onClick={this.handleReroll}
                    data-index={this.props.index}
                >
                    <i
                        className={`${
                            this.state.isRerolling ? 'disabled fa-spin' : ''
                        } fa fa-repeat`}
                    />
                </div>
            </div>
        );
    }
}

Dice.propTypes = {
    diceData: PropTypes.shape({ color: PropTypes.string }),
    index: PropTypes.number,
    dispatch: PropTypes.func,
};

export default Dice;
