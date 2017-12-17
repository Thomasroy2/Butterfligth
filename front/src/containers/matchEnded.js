import MatchEndedComponent from './../components/matchEnded/matchEnded';
import { connect } from 'react-redux';
import {
    setWinner as setWinnerAction
} from './../actions';

const mapStateToProps = (state) => {

    const matchEnded = state.winner.matchEnded;
    const won = state.winner.won;

    return {
        matchEnded,
        won
    };
}

const mapDispatchProps = (dispatch) => {
    return {
        setWinner: (matchEnded, won) => {
            dispatch(setWinnerAction(matchEnded, won));
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(MatchEndedComponent);
