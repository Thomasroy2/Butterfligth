import { connect } from 'react-redux';
import BattleLog from './../components/battleLog/battleLog';

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

export default connect(mapStateToProps, mapDispatchProps)(BattleLog);