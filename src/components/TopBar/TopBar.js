import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './TopBar.scss';

class TopBar extends Component {
    blockClass = 'top-bar';

    render() {
        return (
            <nav
                className={`${
                    this.blockClass
                } navbar navbar-default navbar-static-top`}
            >
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target=".collapse.navbar-collapse"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>

                    <a className="navbar-brand" href="#">
                        Imperial Assault Dice
                    </a>
                </div>

                <div
                    className={`${
                        this.blockClass
                    }__navbar-collapse collapse navbar-collapse`}
                >
                    <ul className={`${this.blockClass}__navbar nav navbar-nav`}>
                        <li
                            className={
                                this.props.location.pathname === '/' ||
                                this.props.location.pathname.indexOf(
                                    '/imperial-assault-dice',
                                ) !== -1
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Link to="/imperial-assault-dice">Home</Link>
                        </li>
                        {/* <li
                            className={
                                this.props.location.pathname === '/breakdown'
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Link to="/breakdown">Breakdown</Link>
                        </li> */}
                        <li
                            className={
                                this.props.location.pathname === '/about'
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

TopBar.propTypes = {
    location: PropTypes.shape({ pathname: PropTypes.string }),
};

export default withRouter(TopBar);
