import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopBar from 'components/TopBar/TopBar';
import DiceSelector from 'components/DiceSelector/DiceSelector';
import SelectedDice from 'components/SelectedDice/SelectedDice';
import DiceStats from 'components/DiceStats/DiceStats';
import BottomBar from 'components/BottomBar/BottomBar';
import Sound from 'react-sound';

import * as DiceActions from 'actions/Dice/DiceActions';

import './Home.scss';

class RollDice extends Component {
    blockClass = 'home';

    handleShowMobileStats = () => {
        this.props.dispatch(DiceActions.showMobileStats());
    };

    handleHideMobileStats = () => {
        this.props.dispatch(DiceActions.hideMobileStats());
    };

    handleSelectDice = index => {
        this.props.dispatch(DiceActions.selectDice(index));
    };

    handleRemoveDice = index => {
        const { dispatch } = this.props;

        dispatch(DiceActions.removeDice(index));
        dispatch(DiceActions.calcTotals);
    };

    handleRerollDice = index => {
        this.props.dispatch(DiceActions.rerollDice(index));

        setTimeout(() => {
            this.props.dispatch(DiceActions.doneRerolling(index));
            this.props.dispatch(DiceActions.calcTotals());
        }, 500);
    };

    handleRollDice = () => {
        this.props.dispatch(DiceActions.clearAllDice());
        this.props.dispatch(DiceActions.rollDice());
    };

    handleResetDice = () => {
        this.props.dispatch(DiceActions.resetDice());
    };

    render() {
        return (
            <div className={this.blockClass}>
                <DiceSelector onSelectDice={this.handleSelectDice} />
                <If condition={this.props.Dice.selected.length}>
                    <div>
                        <div
                            className={`${
                                this.blockClass
                            }__lower-content container-fluid`}
                        >
                            <div className="row">
                                <SelectedDice
                                    selected={this.props.Dice.selected}
                                    onRemove={this.handleRemoveDice}
                                    onReroll={this.handleRerollDice}
                                />
                                <DiceStats
                                    stats={this.props.Dice.stats}
                                    isShowingMobileStats={
                                        this.props.Dice.isShowingMobileStats
                                    }
                                    onShowMobileStats={
                                        this.handleShowMobileStats
                                    }
                                    onHideMobileStats={
                                        this.handleHideMobileStats
                                    }
                                />
                            </div>
                        </div>
                        <BottomBar
                            totals={this.props.Dice.totals}
                            isRolling={this.props.Dice.isRolling}
                            onRoll={this.handleRollDice}
                            onReset={this.handleResetDice}
                        />
                    </div>
                </If>

                <If
                    condition={
                        this.props.Dice.isRolling || this.props.Dice.isRerolling
                    }
                >
                    <Sound
                        url={`${__URL_PREFIX__}/assets/audio/dice-roll.mp3`}
                        playStatus={Sound.status.PLAYING}
                    />
                </If>
            </div>
        );
    }
}

RollDice.propTypes = {
    Dice: PropTypes.shape({ selected: PropTypes.array }).isRequired,
};

export default connect(state => ({ Dice: state.Dice }))(RollDice);
