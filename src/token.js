import { FETCH_CHAR_SUCCESS } from './actions';

export const storePhoto = store => next => action => {
    if (action.type === FETCH_CHAR_SUCCESS){
        localStorage.setItem('You did it!', action.payload.localStorage);
    }
    next(action);
}