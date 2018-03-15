import { UPDATE_CHAT } from './../../actions';
const initialState={
    chat:[],
    author:'',
    message:''
};

export default (state=initialState,action)=>
{
    switch(action.type){
        case UPDATE_CHAT:{
            return{
                ...state,
                chat: [...state.chat,action.newMessage]
            }
        }
        default:
            console.error('Action non traitée dans ce reducer');
            break;
    }

    return state
};