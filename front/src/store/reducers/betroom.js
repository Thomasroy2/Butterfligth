import { UPDATE_BETROOM_DATA } from './../../actions';
const initialState={
    betroom:[]
};

export default (state=initialState,action)=>
{
    switch(action.type){
        case UPDATE_BETROOM_DATA:{
            return{
                ...state,
                betroom: action.payload.newData
            }
        }
        default:
            console.error('Action non traitée dans ce reducer');
            break;
    }

    return state
};