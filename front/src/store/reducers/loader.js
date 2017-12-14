import { CHANGE_LOADING_STATE, CHANGE_LOADING_MESSAGE } from './../../actions';

const initialState = {
  /**
   * List of all products
   */
  isLoading: false,
  loadingMessage: ''
};

export default (state = initialState, action) => {
    
    console.log(action);
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
