import { connect } from 'react-redux';
import EnemyInterface from './../components/enemyInterface/enemyInterface';
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

export default connect(mapStateToProps, mapDispatchProps)(EnemyInterface);