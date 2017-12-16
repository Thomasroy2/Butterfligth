import { connect } from 'react-redux';
import BattleLog from './../components/battleLog/battleLog';
import {
    changeAttackState as changeAttackStateAction,
    updatefightroomData as updatefightroomDataAction
} from './../actions';

const mapStateToProps = (state) => {

    const fightroom = state.fightroom;

    return {
        fightroom,
    };
}

const mapDispatchProps = (dispatch) => {
    return {
        updatefightroomDataAction: (newData) => {
            dispatch(changeAttackStateAction(newData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(BattleLog);