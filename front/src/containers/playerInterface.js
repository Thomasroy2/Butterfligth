import { connect } from 'react-redux';
import PlayerInterface from './../components/fightInterface/playerInterface';
import {
    changeAttackState as changeAttackStateAction
} from './../actions';

const mapStateToProps = (state) => {

    const canAttack = state.attack.canAttack;

    return {
        canAttack,
    };
}

const mapDispatchProps = (dispatch) => {
    return {
        changeLoadingState: (newState) => {
            dispatch(changeAttackStateAction(newState));
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(PlayerInterface);