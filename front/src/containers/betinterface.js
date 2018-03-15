import { connect } from 'react-redux';
import betFightZone from './../components/betFightZone/betFightZone';

const mapStateToProps = (state) => {

    const betroom = state.betroom;

    return {
        betroom,
    };
}

const mapDispatchProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchProps)(betFightZone);