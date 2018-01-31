import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import TopBar from 'components/TopBar/TopBar.js';

import {tester} from '../actions/App/AppActions';

require("sass/app.scss");

export default class AppPage extends Component {
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {

    return (
      <div className="app-container">
        <TopBar {...this.props} />

        <div className="content-container">
          {React.cloneElement(this.props.children || <div />)}
        </div>
      </div>
    )
  }
}

AppPage.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(AppPage);
