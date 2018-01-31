import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from 'components/TopBar/TopBar';
import DiceSelector from 'components/DiceSelector/DiceSelector';
import SelectedDice from 'components/SelectedDice/SelectedDice';
import DiceStats from 'components/DiceStats/DiceStats';
import BottomBar from 'components/BottomBar/BottomBar';
import Sound from 'react-sound';

import './Home.scss';

class RollDice extends Component {
    blockClass = 'home';

    render() {
        return (
            <div className={this.blockClass}>
                <DiceSelector />
                <If condition={this.props.Dice.selected.length}>
                    <div>
                        <div
                            className={`${
                                this.blockClass
                            }__lower-content container-fluid`}
                        >
                            <div className="row">
                                <SelectedDice />
                                <DiceStats />
                            </div>
                        </div>
                        <BottomBar />
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
    Dice: PropTypes.shape({ selected: PropTypes.array }),
};

export default connect(state => ({ Dice: state.Dice }))(RollDice);
