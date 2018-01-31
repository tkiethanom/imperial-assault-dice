import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';

import './BottomBar.scss';

class BottomBar extends Component {
    blockClass = 'bottom-bar';

    componentDidMount() {
        this.handleResize();

        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        document.body.style.marginBottom = 0;

        if (
            window.innerHeight <
            document.body.clientHeight + this.bottomBar.clientHeight
        ) {
            document.body.style.marginBottom = `${
                this.bottomBar.clientHeight
            }px`;
        }
    };

    handleRoll = () => {
        if (!this.props.isRolling) {
            this.props.onRoll();
        }
    };

    handleReset = () => {
        this.props.onReset();
    };

    render() {
        return (
            <div
                ref={elem => (this.bottomBar = elem)}
                className={`${this.blockClass} container-fluid`}
            >
                <button
                    className={`btn btn-success ${
                        this.blockClass
                    }__roll-button ${this.props.isRolling ? 'disabled' : ''}`}
                    onClick={this.handleRoll}
                >
                    {this.props.isRolling ? (
                        <i className="fa fa-spinner fa-spin" />
                    ) : (
                        'Roll'
                    )}
                </button>
                <button
                    className={`btn btn-default ${
                        this.blockClass
                    }__reset-button`}
                    onClick={this.handleReset}
                >
                    Reset
                </button>

                <If condition={this.props.totals}>
                    <div className={`${this.blockClass}__totals`}>
                        <div className={`${this.blockClass}__offense-total`}>
                            <div
                                className={`${this.blockClass}__damage`}
                                title="Damage"
                            >
                                <Icon
                                    type="damage"
                                    iconClassName={`${
                                        this.blockClass
                                    }__icon-damage`}
                                />{' '}
                                {this.props.totals.damage}
                            </div>
                            <div
                                className={`${this.blockClass}__surge`}
                                title="Surge"
                            >
                                <Icon
                                    type="surge"
                                    iconClassName={`${
                                        this.blockClass
                                    }__icon-surge`}
                                />{' '}
                                {this.props.totals.surge}
                            </div>
                            <div
                                className={`${this.blockClass}__accuracy`}
                                title="Accuracy"
                            >
                                <Icon
                                    type="accuracy"
                                    iconClassName={`${
                                        this.blockClass
                                    }__icon-accuracy`}
                                />{' '}
                                {this.props.totals.accuracy}
                            </div>
                        </div>
                        <div className={`${this.blockClass}__defense-total`}>
                            <div
                                className={`${this.blockClass}__block`}
                                title="Block"
                            >
                                <Icon
                                    type="block"
                                    iconClassName={`${
                                        this.blockClass
                                    }__icon-block`}
                                />{' '}
                                {this.props.totals.block}
                            </div>
                            <div
                                className={`${this.blockClass}__evade`}
                                title="Evade"
                            >
                                <Icon
                                    type="evade"
                                    iconClassName={`${
                                        this.blockClass
                                    }__icon-evade`}
                                />{' '}
                                {this.props.totals.evade}
                            </div>
                            <div
                                className={`${this.blockClass}__dodge`}
                                title="Dodge"
                            >
                                <Icon
                                    type="dodge"
                                    iconClassName={`${
                                        this.blockClass
                                    }__icon-dodge`}
                                />{' '}
                                {this.props.totals.dodge}
                            </div>
                        </div>
                    </div>
                </If>
            </div>
        );
    }
}

BottomBar.propTypes = {
    totals: PropTypes.object,
    isRolling: PropTypes.bool,
    onRoll: PropTypes.func,
    onReset: PropTypes.func,
};

export default BottomBar;
