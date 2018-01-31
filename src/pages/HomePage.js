import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {tester} from '../actions/App/AppActions';

import DiceSelector from 'components/DiceSelector/DiceSelector.js';
import SelectedDice from 'components/SelectedDice/SelectedDice.js';
import DiceStats from 'components/DiceStats/DiceStats.js';
import BottomBar from 'components/BottomBar/BottomBar.js';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    //this.handleSetMode = this.handleSetMode.bind(this);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <DiceSelector />

        <div className={(this.props.Dice.selected.length) ? "dice-results-container container-fluid" : "dice-results-container container-fluid hide" }>
          <div className="row">
            <SelectedDice />
            <DiceStats />
          </div>
        </div>

        <BottomBar />
        <audio id="audioDiceRoll" src="audio/dice-roll.mp3" preload="auto"></audio>
      </div>
    );
  }
}

HomePage.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(HomePage);
