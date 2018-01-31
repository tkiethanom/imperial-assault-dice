import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import * as Pages from './pages/index';

export default class Routes extends Component {
  render() {
    //Fix for "Warning: You cannot change <Router routes>; it will be ignored"
    //https://github.com/reactjs/react-router/issues/2704
    const routes =
      <Route path={'/'} component={Pages.AppPage}>
        <IndexRoute title="Home" component={Pages.HomePage} />
        <Route path={'about'} title="AboutPage" component={Pages.AboutPage} />
        <Route path="*" component={Pages.Error404Page}/>
      </Route>;

    return (
      <Router history={browserHistory} onUpdate={() => this.handleRouteChange()}>
        {routes}
      </Router>
    );
  }

  handleRouteChange(){

  }
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    App: state.App
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Routes);
