import {
    changeLoadingState as changeLoadingStateAction
} from './../actions';
import store from '../store/index';

class LoaderProvider {
    
    /**
     * 
     * @param {*boolean} isLoading Affiche ou non le loader
     * @param {*string} loadingMessage Message affiché par le loader
     */
    static setLoader(isLoading, loadingMessage) {
        store.dispatch(changeLoadingStateAction(isLoading, loadingMessage || ''));
    }
}

export default LoaderProvider;