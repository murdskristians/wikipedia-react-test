import axios from 'axios';
import { Dispatch } from 'redux';
import { OnThisDayActionTypes, OnThisDayAction } from '../types';

export const fetchOnThisDay = () => async (dispatch: Dispatch<OnThisDayAction>) => {
    dispatch({ type: OnThisDayActionTypes.FETCH_ON_THIS_DAY_REQUEST });

    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    try {
        const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`);
        dispatch({ type: OnThisDayActionTypes.FETCH_ON_THIS_DAY_SUCCESS, payload: response.data.events });
    } catch (error: any) {
        dispatch({ type: OnThisDayActionTypes.FETCH_ON_THIS_DAY_FAILURE, payload: error.message });
    }
};
