import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Icon from 'components/Icon/Icon';

import './DiceStats.scss';

class DiceStats extends Component {
    blockClass = 'dice-stats';

    render() {
        return (
            <div className={`${this.blockClass} col-xs-12 col-sm-6 col-md-6`}>
                <div
                    className={`${
                        this.blockClass
                    }__show-stats-button-container ${
                        this.props.isShowingMobileStats ? 'hide' : 'visible-xs'
                    }`}
                >
                    <button
                        className={`${
                            this.blockClass
                        }__show-stats-button btn btn-default`}
                        onClick={this.props.onShowMobileStats}
                    >
                        Show Stats
                    </button>
                </div>
                <div
                    className={`${this.blockClass}__stats-container ${
                        this.props.isShowingMobileStats ? '' : 'hidden-xs'
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
                                    {this.props.stats.damage.min}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.surge.min}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.accuracy.min}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.block.min}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.evade.min}
                                </td>
                            </tr> */}
                            <tr>
                                <th>Max</th>
                                <td className="text-right">
                                    {this.props.stats.damage.max}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.surge.max}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.accuracy.max}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.block.max}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.evade.max}
                                </td>
                                <td className="text-right">
                                    {this.props.stats.dodge.max}
                                </td>
                            </tr>
                            <tr>
                                <th>Avg</th>
                                <td className="text-right">
                                    {numeral(
                                        this.props.stats.damage.avg,
                                    ).format('0.[00]')}
                                </td>
                                <td className="text-right">
                                    {numeral(this.props.stats.surge.avg).format(
                                        '0.[00]',
                                    )}
                                </td>
                                <td className="text-right">
                                    {numeral(
                                        this.props.stats.accuracy.avg,
                                    ).format('0.[00]')}
                                </td>
                                <td className="text-right">
                                    {numeral(this.props.stats.block.avg).format(
                                        '0.[00]',
                                    )}
                                </td>
                                <td className="text-right">
                                    {numeral(this.props.stats.evade.avg).format(
                                        '0.[00]',
                                    )}
                                </td>
                                <td className="text-right">
                                    {numeral(this.props.stats.dodge.avg).format(
                                        '0.[00]',
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="visible-xs ">
                        <button
                            className="btn btn-default"
                            onClick={this.props.onHideMobileStats}
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
    stats: PropTypes.object.isRequired,
    isShowingMobileStats: PropTypes.bool.isRequired,
    onShowMobileStats: PropTypes.func.isRequired,
    onHideMobileStats: PropTypes.func.isRequired,
};

export default DiceStats;
