import { CHANGE_LOADING_STATE } from './../../actions';

const initialState = {
  isLoading: false,
  loadingMessage: ''
};

export default (state = initialState, action) => {
    
    switch (action.type) {
        case CHANGE_LOADING_STATE:
            return {
                ...state,
                isLoading: action.payload.newState,
                loadingMessage: action.payload.newMessage
            }
    }
    
    return state
};
