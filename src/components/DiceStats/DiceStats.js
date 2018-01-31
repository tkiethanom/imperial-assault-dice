import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import numeral from 'numeral';
import Icon from 'components/Icon/Icon';

import { showStatsMobile, hideStatsMobile } from 'actions/Dice/DiceActions';

import './DiceStats.scss';

class DiceStats extends Component {
    blockClass = 'dice-stats';

    handleShowStats = () => {
        this.props.dispatch(showStatsMobile());
    };

    handleHideStats = () => {
        this.props.dispatch(hideStatsMobile());
    };

    render() {
        return (
            <div className={`${this.blockClass} col-xs-12 col-sm-6 col-md-6`}>
                <div
                    className={`${
                        this.blockClass
                    }__show-stats-button-container ${
                        this.props.Dice.showStatsMobile ? 'hide' : 'visible-xs'
                    }`}
                >
                    <button
                        className={`${
                            this.blockClass
                        }__show-stats-button btn btn-default`}
                        onClick={this.handleShowStats}
                    >
                        Show Stats
                    </button>
                </div>
                <div
                    className={`${this.blockClass}__stats-container ${
                        this.props.Dice.showStatsMobile ? '' : 'hidden-xs'
                    }`}
                >
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Stats</th>
                                <th className="text-right">
                                    <Icon
                                        type="damage"
                                        iconClassName={`${
                                            this.blockClass
                                        }__icon-damage`}
                                    />
                                </th>
                                <th className="text-right">
                                    <Icon
                                        type="surge"
                                        iconClassName={`${
                                            this.blockClass
                                        }__icon-surge`}
                                    />
                                </th>
                                <th className="text-right">
                                    <Icon
                                        type="accuracy"
                                        iconClassName={`${
                                            this.blockClass
                                        }__icon-accuracy`}
                                    />
                                </th>
                                <th className="text-right">
                                    <Icon
                                        type="block"
                                        iconClassName={`${
                                            this.blockClass
                                        }__icon-block`}
                                    />
                                </th>
                                <th className="text-right">
                                    <Icon
                                        type="evade"
                                        iconClassName={`${
                                            this.blockClass
                                        }__icon-evade`}
                                    />
                                </th>
                                <th className="text-right">
                                    <Icon
                                        type="dodge"
                                        iconClassName={`${
                                            this.blockClass
                                        }__icon-dodge`}
                                    />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <th>Min</th>
                                <td className="text-right">
                                    {this.props.Dice.stats.damage.min}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.surge.min}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.accuracy.min}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.block.min}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.evade.min}
                                </td>
                            </tr> */}
                            <tr>
                                <th>Max</th>
                                <td className="text-right">
                                    {this.props.Dice.stats.damage.max}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.surge.max}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.accuracy.max}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.block.max}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.evade.max}
                                </td>
                                <td className="text-right">
                                    {this.props.Dice.stats.dodge.max}
                                </td>
                            </tr>
                            <tr>
                                <th>Avg</th>
                                <td className="text-right">
                                    {numeral(
                                        this.props.Dice.stats.damage.avg,
                                    ).format('0.[00]')}
                                </td>
                                <td className="text-right">
                                    {numeral(
                                        this.props.Dice.stats.surge.avg,
                                    ).format('0.[00]')}
                                </td>
                                <td className="text-right">
                                    {numeral(
                                        this.props.Dice.stats.accuracy.avg,
                                    ).format('0.[00]')}
                                </td>
                                <td className="text-right">
                                    {numeral(
                                        this.props.Dice.stats.block.avg,
                                    ).format('0.[00]')}
                                </td>
                                <td className="text-right">
                                    {numeral(
                                        this.props.Dice.stats.evade.avg,
                                    ).format('0.[00]')}
                                </td>
                                <td className="text-right">
                                    {numeral(
                                        this.props.Dice.stats.dodge.avg,
                                    ).format('0.[00]')}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="visible-xs ">
                        <button
                            className="btn btn-default"
                            onClick={this.handleHideStats}
                        >
                            Hide Stats
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

DiceStats.propTypes = {
    Dice: PropTypes.shape({
        stats: PropTypes.object,
        showStatsMobile: PropTypes.bool,
    }),
};

export default connect(state => ({ Dice: state.Dice }))(DiceStats);
