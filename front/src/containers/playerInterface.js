import { connect } from 'react-redux';
import PlayerInterface from './../components/fightInterface/playerInterface';
import {
    changeAttackState as changeAttackStateAction,
    updatefightroomData as updatefightroomDataAction
} from './../actions';

const mapStateToProps = (state) => {

    const canAttack = state.attack.canAttack;
    const fightroom = state.fightroom;

    return {
        canAttack,
        fightroom,
    };
}

const mapDispatchProps = (dispatch) => {
    return {
        changeLoadingState: (newState) => {
            dispatch(changeAttackStateAction(newState));
        },
        updatefightroomDataAction: (newData) => {
            dispatch(changeAttackStateAction(newData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(PlayerInterface);