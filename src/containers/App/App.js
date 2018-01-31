import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from 'components/TopBar/TopBar';
import DiceSelector from 'components/DiceSelector/DiceSelector';
import Home from 'containers/Home/Home';
import About from 'containers/About/About';

import './App.scss';

export default class App extends Component {
    blockClass = 'app';

    render() {
        return (
            <div className={this.blockClass}>
                <BrowserRouter>
                    <div>
                        <TopBar />
                        <div className="app-content">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route
                                    path="/imperial-assault-dice"
                                    component={Home}
                                />
                                <Route path="/about" component={About} />
                                <Route component={Home} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
