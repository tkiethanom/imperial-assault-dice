export const SELECT_DICE = 'SELECT_DICE';
export const REMOVE_DICE = 'REMOVE_DICE';
export const ROLL_DICE = 'ROLL_DICE';
export const DONE_ROLLING = 'DONE_ROLLING';
export const RESET_DICE = 'RESET_DICE';
export const REROLL_DICE = 'REROLL_DICE';
export const DONE_REROLLING = 'DONE_REROLLING';
export const CLEAR_ALL_DICE = 'CLEAR_ALL_DICE';
export const CALC_TOTALS = 'CALC_TOTALS';
export const SHOW_MOBILE_STATS = 'SHOW_MOBILE_STATS';
export const HIDE_MOBILE_STATS = 'HIDE_MOBILE_STATS';

export function selectDice(index) {
    return {
        type: SELECT_DICE,
        value: index,
    };
}

export function removeDice(index) {
    return {
        type: REMOVE_DICE,
        value: index,
    };
}

export function rollDice() {
    return dispatch => {
        dispatch({ type: ROLL_DICE });

        setTimeout(() => {
            dispatch(doneRolling());
            dispatch(calcTotals());
        }, 500);
    };
}

export function doneRolling() {
    return {
        type: DONE_ROLLING,
    };
}

export function resetDice() {
    return {
        type: RESET_DICE,
    };
}

export function rerollDice(index) {
    return {
        type: REROLL_DICE,
        value: index,
    };
}

export function doneRerolling(index) {
    return {
        type: DONE_REROLLING,
        value: index,
    };
}

export function clearAllDice() {
    return {
        type: CLEAR_ALL_DICE,
    };
}

export function calcTotals() {
    return {
        type: CALC_TOTALS,
    };
}

export function showMobileStats() {
    return {
        type: SHOW_MOBILE_STATS,
    };
}

export function hideMobileStats() {
    return {
        type: HIDE_MOBILE_STATS,
    };
}
