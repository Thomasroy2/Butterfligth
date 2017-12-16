export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';
export const CHANGE_ATTACK_STATE = 'CHANGE_ATTACK_STATE';

export const changeLoadingState = (newState, newMessage) => {
    return {
        type: CHANGE_LOADING_STATE,
        payload: {
            newState: newState,
            newMessage: newMessage
        }
    }
}

export const changeAttackState = (newState) => {
    return {
        type: CHANGE_ATTACK_STATE,
        payload: {
            newState: newState
        }
    }
}