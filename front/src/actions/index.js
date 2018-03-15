export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE';
export const CHANGE_ATTACK_STATE = 'CHANGE_ATTACK_STATE';
export const UPDATE_FIGHTROOM_DATA = 'UPDATE_FIGHTROOM_DATA';
export const UPDATE_BETROOM_DATA = 'UPDATE_BETROOM_DATA';
export const UPDATE_CHAT = 'UPDATE_CHAT';
export const SET_WINNER = 'SET_WINNER';

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

export const updateFightroomData = (newData) => {
    return {
        type: UPDATE_FIGHTROOM_DATA,
        payload: {
            newData: newData
        }
    }
}

export const setWinner = (matchEnded, won) => {
    return {
        type: SET_WINNER,
        payload: {
            matchEnded: matchEnded,
            won: won
        }
    }
}
export const updateBetroomData=(newData)=>{
    return {
        type: UPDATE_BETROOM_DATA,
        payload:{
            newData:newData
        }
    }
}
export const updateChat=(newMessage)=>{
    return{
        type:UPDATE_CHAT,
        newMessage:newMessage
    }
}