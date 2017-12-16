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
    }
    
    return state
};
