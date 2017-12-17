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
    }

    return state
};
