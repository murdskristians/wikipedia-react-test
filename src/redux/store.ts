import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { onThisDayReducer } from './reducers';

const rootReducer = combineReducers({
    onThisDay: onThisDayReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
