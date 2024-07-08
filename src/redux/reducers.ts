import { combineReducers } from 'redux'; 
import { OnThisDayAction, OnThisDayActionTypes, OnThisDayState } from '../types';

const initialState: OnThisDayState = {
    loading: false,
    data: [],
    error: null,
};

export const onThisDayReducer = (state = initialState, action: OnThisDayAction): OnThisDayState => {
    switch (action.type) {
        case OnThisDayActionTypes.FETCH_ON_THIS_DAY_REQUEST:
            return { ...state, loading: true, error: null };
        case OnThisDayActionTypes.FETCH_ON_THIS_DAY_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case OnThisDayActionTypes.FETCH_ON_THIS_DAY_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    onThisDay: onThisDayReducer,
});

export type RootState = ReturnType<typeof rootReducer>; // Export RootState type
export default rootReducer;
