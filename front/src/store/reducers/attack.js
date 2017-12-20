import { CHANGE_ATTACK_STATE } from './../../actions';

const initialState = {
    canAttack: false
};

export default (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_ATTACK_STATE:
            return {
                ...state,
                canAttack: action.payload.newState
            }
        default:
            console.error('Action non traité dans ce reducer');
            break;
    }

    return state
};
