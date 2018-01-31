import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';

import './Dice.scss';

class Dice extends Component {
    blockClass = 'dice';

    handleRemove = e => {
        this.props.onRemove(e.currentTarget.getAttribute('data-index'));
    };

    handleReroll = e => {
        if (!this.props.isRolling) {
            const index = e.currentTarget.getAttribute('data-index');

            this.props.onReroll(index);
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
                            this.props.isRolling ? 'disabled fa-spin' : ''
                        } fa fa-repeat`}
                    />
                </div>
            </div>
        );
    }
}

Dice.propTypes = {
    isRolling: PropTypes.bool,
    diceData: PropTypes.shape({ color: PropTypes.string }).isRequired,
    index: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onReroll: PropTypes.func.isRequired,
};

export default Dice;
