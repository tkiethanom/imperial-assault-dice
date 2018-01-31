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

                    <Link className="navbar-brand" to={__URL_PREFIX__ || '/'}>
                        Imperial Assault Dice
                    </Link>
                </div>

                <div
                    className={`${
                        this.blockClass
                    }__navbar-collapse collapse navbar-collapse`}
                >
                    <ul
                        className={`${
                            this.blockClass
                        }__navbar nav navbar-nav navbar-right`}
                    >
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
                                this.props.location.pathname ===
                                `${__URL_PREFIX__}/about`
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Link to={`${__URL_PREFIX__}/about`}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

TopBar.propTypes = {
    location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default withRouter(TopBar);
