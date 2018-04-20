import * as types from '../actions/types';
import { combineReducers } from 'redux';

function favouriteUnisReducer(state = [], action) {
    if (action.type === types.FAVOURITE_UNI) {
        const favourites = [...state];

        favourites.push(action.pubukprn);

        return favourites;
    } else {
        return state;
    }
}

function uniLookupTableReducer(state = {
    isFetching: false,
    lookupTable: {}
}, action) {
    switch (action.type) {
        case types.REQUEST_UNI_LOOKUP_TABLE:
            return {...state,
                isFetching: true
            };
        case types.RECEIVE_UNI_LOOKUP_TABLE:
            return {...state,
                isFetching: false,
                lookupTable: action.lookupTable
            };
        default:
            return state;
    }
}

// UI reducers

function selectTabReducer(state = 0, action) {
    if (action.type === types.SELECT_TAB) {
        return action.index;
    } else {
        return state;
    }
}

export default combineReducers({
    favouriteUnis: favouriteUnisReducer,
    uniLookupTable: uniLookupTableReducer,
    selectTab: selectTabReducer
})
