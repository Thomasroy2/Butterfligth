import { UPDATE_FIGHTROOM_DATA } from './../../actions';

const initialState = {
  fightroom: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_FIGHTROOM_DATA:
            return {
                ...state,
                fightroom: action.payload.newData
            }
    }

    return state
};
