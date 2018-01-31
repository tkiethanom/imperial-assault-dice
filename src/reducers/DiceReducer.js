import _ from 'lodash';
import Random from 'random-js';
import {
    SELECT_DICE,
    REMOVE_DICE,
    ROLL_DICE,
    DONE_ROLLING,
    RESET_DICE,
    REROLL_DICE,
    DONE_REROLLING,
    CLEAR_ALL_DICE,
    CLEAR_DICE,
    CALC_TOTALS,
    CLEAR_TOTALS,
    SHOW_STATS_MOBILE,
    HIDE_STATS_MOBILE,
} from 'actions/Dice/DiceActions';

import diceData from 'data/dice.json';

_.each(diceData, (item, i) => {
    diceData[i].stats = {};

    if (item.type === 'offense') {
        _.each(['damage', 'surge', 'accuracy'], field => {
            let min = 0;
            let max = 0;
            let sum = 0;

            _.each(item.faces, face => {
                if (face[field] < min) {
                    min = face[field];
                }

                if (face[field] > max) {
                    max = face[field];
                }

                sum += face[field];
            });

            diceData[i].stats[field] = {
                min,
                max,
                avg: sum / 6,
            };
        });
    } else {
        _.each(['block', 'evade', 'dodge'], field => {
            let min = 0;
            let max = 0;
            let sum = 0;

            _.each(item.faces, face => {
                if (face[field] < min) {
                    min = face[field];
                }

                if (face[field] > max) {
                    max = face[field];
                }

                sum += face[field];
            });

            diceData[i].stats[field] = {
                min,
                max,
                avg: sum / 6,
            };
        });
    }
});

const testSet = () => {
    const output = [];

    _.each(diceData, diceType => {
        _.each(diceType.faces, face => {
            output.push({
                color: diceType.color,
                type: diceType.type,
                face,
            });
        });
    });

    return output;
};

const initialState = {
    isRolling: false,
    isRerolling: false,
    totals: null,
    showStatsMobile: false,
    stats: {
        damage: {
            min: 0,
            max: 0,
            avg: 0,
        },
        surge: {
            min: 0,
            max: 0,
            avg: 0,
        },
        accuracy: {
            min: 0,
            max: 0,
            avg: 0,
        },
        block: {
            min: 0,
            max: 0,
            avg: 0,
        },
        evade: {
            min: 0,
            max: 0,
            avg: 0,
        },
        dodge: {
            min: 0,
            max: 0,
            avg: 0,
        },
    },
    dice: diceData,
    selected: [],
    /*{color: 'blue', type: 'offense', face: {damage: 0, surge: 0, accuracy: 0, block: 0, miss: true } },
    {color: 'blue', type: 'offense', face: {damage: 2, surge: 1, accuracy: 2, block: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {damage: 2, surge: 0, accuracy: 3, block: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {damage: 2, surge: 0, accuracy: 4, block: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {damage: 1, surge: 0, accuracy: 5, block: 0, miss: false } },
    {color: 'blue', type: 'offense', face: {damage: 1, surge: 1, accuracy: 6, block: 0, miss: false } },

    {color: 'red', type: 'offense', face: {damage: 1, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'red', type: 'offense', face: {damage: 2, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'red', type: 'offense', face: {damage: 2, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'red', type: 'offense', face: {damage: 2, surge: 0, accuracy: 0, block: 0, miss: false }},
    {color: 'red', type: 'offense', face: {damage: 3, surge: 0, accuracy: 0, block: 0, miss: false }},
    {color: 'red', type: 'offense', face: {damage: 3, surge: 1, accuracy: 0, block: 0, miss: false }},

    {color: 'yellow', type: 'offense', face: {damage: 0, surge: 1, accuracy: 1, block: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {damage: 1, surge: 0, accuracy: 1, block: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {damage: 1, surge: 0, accuracy: 2, block: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {damage: 1, surge: 1, accuracy: 0, block: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {damage: 2, surge: 0, accuracy: 0, block: 0, miss: false }},
    {color: 'yellow', type: 'offense', face: {damage: 2, surge: 1, accuracy: 0, block: 0, miss: false }},

    {color: 'green', type: 'offense', face: {damage: 1, surge: 0, accuracy: 0, block: 0, miss: false }},
    {color: 'green', type: 'offense', face: {damage: 0, surge: 1, accuracy: 0, block: 0, miss: false }},
    {color: 'green', type: 'offense', face: {damage: 0, surge: 1, accuracy: 1, block: 0, miss: false }},
    {color: 'green', type: 'offense', face: {damage: 1, surge: 0, accuracy: 1, block: 0, miss: false }},
    {color: 'green', type: 'offense', face: {damage: 1, surge: 1, accuracy: 0, block: 0, miss: false }},
    {color: 'green', type: 'offense', face: {damage: 1, surge: 1, accuracy: 1, block: 0, miss: false }},

    {color: 'gray', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'gray', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 1, miss: false } },
    {color: 'gray', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 1, miss: false } },
    {color: 'gray', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 1, miss: false } },
    {color: 'gray', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 2, miss: false } },
    {color: 'gray', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 3, miss: false } },

    {color: 'black', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'black', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 2, miss: false } },
    {color: 'black', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 2, miss: false } },
    {color: 'black', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 2, miss: false } },
    {color: 'black', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 3, miss: false } },
    {color: 'black', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 4, miss: false } },

    {color: 'brown', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'brown', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'brown', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 0, miss: false } },
    {color: 'brown', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 1, miss: false } },
    {color: 'brown', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 1, miss: false } },
    {color: 'brown', type: 'defense', face: {damage: 0, surge: 0, accuracy: 0, block: 2, miss: false } },
    */
};

export default (state = initialState, action = null) => {
    let cloned;
    let stats;
    let dice;

    switch (action.type) {
        case SELECT_DICE:
            cloned = _.clone(state.selected);
            dice = _.clone(state.dice[action.value]);

            cloned.push(dice);

            stats = calcStats(cloned);

            return _.assign({}, state, {
                selected: cloned,
                stats: stats,
            });
        case REMOVE_DICE:
            cloned = _.clone(state.selected);
            cloned.splice(action.value, 1);

            stats = calcStats(cloned);

            return _.assign({}, state, {
                selected: cloned,
                stats: stats,
            });
        case ROLL_DICE:
            return {
                ...state,
                isRolling: true,
            };
        case DONE_ROLLING:
            cloned = _.clone(state.selected);

            _.each(cloned, function(item, i) {
                cloned[i] = roll(item);
            });

            return {
                ...state,
                isRolling: false,
                selected: cloned,
            };
        case RESET_DICE:
            return _.assign({}, state, {
                selected: initialState.selected,
            });
        case REROLL_DICE:
            return {
                ...state,
                isRerolling: true,
            };
        case DONE_REROLLING:
            cloned = _.clone(state.selected);

            cloned[action.value] = roll(cloned[action.value]);

            return {
                ...state,
                isRerolling: false,
                selected: cloned,
            };
        case CLEAR_ALL_DICE:
            cloned = _.clone(state.selected);

            _.each(cloned, function(item, i) {
                cloned[i] = {
                    ...item,
                    face: null,
                };
            });

            return _.assign({}, state, {
                selected: cloned,
            });
        case CLEAR_DICE:
            cloned = _.clone(state.selected);

            dice = _.clone(cloned[action.value]);

            cloned[action.value] = _.assign({}, dice, {
                face: null,
            });

            return _.assign({}, state, {
                selected: cloned,
            });
        case CALC_TOTALS:
            return _.assign({}, state, {
                totals: calcTotals(state.selected),
            });
        case CLEAR_TOTALS:
            return _.assign({}, state, {
                totals: null,
            });
        case SHOW_STATS_MOBILE:
            return _.assign({}, state, {
                showStatsMobile: true,
            });
        case HIDE_STATS_MOBILE:
            return _.assign({}, state, {
                showStatsMobile: false,
            });
        default:
            return state;
    }
};

function roll(data) {
    const random = new Random(Random.engines.mt19937().autoSeed());
    const randomValue = random.integer(0, 5);

    const dice = _.find(initialState.dice, { color: data.color });
    const face = dice.faces[randomValue];

    return _.assign({}, dice, {
        face: face,
    });
}

function calcTotals(data) {
    let offense = false;
    let defense = false;
    let damage = 0;
    let surge = 0;
    let accuracy = 0;
    let block = 0;
    let evade = 0;
    let dodge = 0;

    _.each(data, function(item, i) {
        if (item.face) {
            if (item.type == 'offense') {
                offense = true;

                damage += item.face.damage;
                surge += item.face.surge;
                accuracy += item.face.accuracy;
            } else if (item.type == 'defense') {
                defense = true;

                block += item.face.block;
                evade += item.face.evade;
                dodge += item.face.dodge;
            }
        }
    });

    return {
        offense,
        defense,
        damage,
        surge,
        accuracy,
        block,
        evade,
        dodge,
    };
}

function calcStats(data) {
    const output = _.cloneDeep(initialState.stats);

    _.each(data, function(item, i) {
        if (item.stats.damage) {
            output.damage.min += item.stats.damage.min;
            output.damage.max += item.stats.damage.max;
            output.damage.avg += item.stats.damage.avg;
        }

        if (item.stats.surge) {
            output.surge.min += item.stats.surge.min;
            output.surge.max += item.stats.surge.max;
            output.surge.avg += item.stats.surge.avg;
        }

        if (item.stats.accuracy) {
            output.accuracy.min += item.stats.accuracy.min;
            output.accuracy.max += item.stats.accuracy.max;
            output.accuracy.avg += item.stats.accuracy.avg;
        }

        if (item.stats.block) {
            output.block.min += item.stats.block.min;
            output.block.max += item.stats.block.max;
            output.block.avg += item.stats.block.avg;
        }

        if (item.stats.evade) {
            output.evade.min += item.stats.evade.min;
            output.evade.max += item.stats.evade.max;
            output.evade.avg += item.stats.evade.avg;
        }

        if (item.stats.dodge) {
            output.dodge.min += item.stats.dodge.min;
            output.dodge.max += item.stats.dodge.max;
            output.dodge.avg += item.stats.dodge.avg;
        }
    });

    return output;
}
