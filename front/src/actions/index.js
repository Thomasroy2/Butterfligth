export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';

export const changeLoadingState = (newState, newMessage) => {
    return {
        type: CHANGE_LOADING_STATE,
        payload: {
            newState: newState,
            newMessage: newMessage
        }
    }
}