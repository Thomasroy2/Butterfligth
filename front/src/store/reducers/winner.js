import { SET_WINNER } from './../../actions';

const initialState = {
    matchEnded: false,
    winner: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_WINNER:
            return {
                ...state,
                matchEnded: action.payload.matchEnded,
                won: action.payload.won
            }
        default:
            console.error('Action non traité dans ce reducer');
            break;
    }

    return state
};
