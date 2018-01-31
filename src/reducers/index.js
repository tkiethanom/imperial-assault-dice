import { combineReducers } from 'redux';
import Dice from './DiceReducer';

export default () =>
    combineReducers({
        Dice,
    });
