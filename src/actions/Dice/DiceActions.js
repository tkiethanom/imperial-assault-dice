export const SELECT_DICE = 'SELECT_DICE';
export const REMOVE_DICE = 'REMOVE_DICE';
export const ROLL_DICE = 'ROLL_DICE';
export const DONE_ROLLING = 'DONE_ROLLING';
export const RESET_DICE = 'RESET_DICE';
export const REROLL_DICE = 'REROLL_DICE';
export const DONE_REROLLING = 'DONE_REROLLING';
export const CLEAR_ALL_DICE = 'CLEAR_ALL_DICE';
export const CLEAR_DICE = 'CLEAR_DICE';
export const CALC_TOTALS = 'CALC_TOTALS';
export const CLEAR_TOTALS = 'CLEAR_TOTALS';
export const SHOW_STATS_MOBILE = 'SHOW_STATS_MOBILE';
export const HIDE_STATS_MOBILE = 'HIDE_STATS_MOBILE';

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

export function rerollDice() {
    return {
        type: REROLL_DICE,
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

export function clearDice(index) {
    return {
        type: CLEAR_DICE,
        value: index,
    };
}

export function calcTotals() {
    return {
        type: CALC_TOTALS,
    };
}

export function clearTotals() {
    return {
        type: CLEAR_TOTALS,
    };
}

export function showStatsMobile() {
    return {
        type: SHOW_STATS_MOBILE,
    };
}

export function hideStatsMobile() {
    return {
        type: HIDE_STATS_MOBILE,
    };
}
