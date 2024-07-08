export interface OnThisDayEvent {
    year: number;
    text: string;
    // Add other relevant fields
}

export interface OnThisDayState {
    loading: boolean;
    data: OnThisDayEvent[];
    error: string | null;
}

export enum OnThisDayActionTypes {
    FETCH_ON_THIS_DAY_REQUEST = 'FETCH_ON_THIS_DAY_REQUEST',
    FETCH_ON_THIS_DAY_SUCCESS = 'FETCH_ON_THIS_DAY_SUCCESS',
    FETCH_ON_THIS_DAY_FAILURE = 'FETCH_ON_THIS_DAY_FAILURE',
}

interface FetchOnThisDayRequestAction {
    type: OnThisDayActionTypes.FETCH_ON_THIS_DAY_REQUEST;
}

interface FetchOnThisDaySuccessAction {
    type: OnThisDayActionTypes.FETCH_ON_THIS_DAY_SUCCESS;
    payload: OnThisDayEvent[];
}

interface FetchOnThisDayFailureAction {
    type: OnThisDayActionTypes.FETCH_ON_THIS_DAY_FAILURE;
    payload: string;
}

export type OnThisDayAction = FetchOnThisDayRequestAction | FetchOnThisDaySuccessAction | FetchOnThisDayFailureAction;
