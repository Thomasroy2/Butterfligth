import { connect } from 'react-redux';
import EnemyInterface from './../components/enemyInterface/enemyInterface';

const mapStateToProps = (state) => {

    const fightroom = state.fightroom;

    return {
        fightroom,
    };
}

const mapDispatchProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchProps)(EnemyInterface);