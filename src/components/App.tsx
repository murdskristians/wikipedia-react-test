import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchOnThisDay } from '../redux/actions';
import { RootState } from '../redux/store';
import { OnThisDayAction } from '../types';
import OnThisDayList from './OnThisDayList';
import Loading from './Loading';
import ErrorModal from './ErrorModal';

type AppDispatch = ThunkDispatch<RootState, void, OnThisDayAction>;

const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const onThisDayState = useSelector((state: RootState) => state.onThisDay);

    const handleFetch = () => {
        dispatch(fetchOnThisDay());
    };

    return (
        <div className="App">
            <button onClick={handleFetch}>Fetch On This Day</button>
            {onThisDayState.loading && <Loading />}
            {onThisDayState.error && <ErrorModal message={onThisDayState.error} />}
            <OnThisDayList events={onThisDayState.data} />
        </div>
    );
};

export default App;
