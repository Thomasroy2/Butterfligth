import { connect } from 'react-redux';
import LoaderComponent from './../components/loader/loader';
import {
    changeLoadingState as changeLoadingStateAction
} from './../actions';

const mapStateToProps = (state) => {

    const isLoading = state.loader.isLoading;
    const loadingMessage = state.loader.loadingMessage;

    return {
        isLoading,
        loadingMessage
    };
}

const mapDispatchProps = (dispatch) => {
    return {
        changeLoadingState: (newState) => {
            dispatch(changeLoadingStateAction(newState));
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(LoaderComponent);