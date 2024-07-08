import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import { RootState } from '../redux/store';
import rootReducer from '../redux/reducers';

const renderWithProviders = (
    ui: React.ReactElement,
    { initialState, store = createStore(rootReducer, initialState) }: any = {}
) => {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    };
};

describe('App component', () => {
    test('renders the fetch button', () => {
        const initialState: RootState = { onThisDay: { loading: false, data: [], error: null } };
        renderWithProviders(<App />, { initialState });
        expect(screen.getByText('Fetch On This Day')).toBeInTheDocument();
    });

    test('shows loading when fetching data', () => {
        const initialState: RootState = { onThisDay: { loading: true, data: [], error: null } };
        renderWithProviders(<App />, { initialState });
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('shows error modal when there is an error', () => {
        const initialState: RootState = { onThisDay: { loading: false, data: [], error: 'Failed to fetch data' } };
        renderWithProviders(<App />, { initialState });
        expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
    });

    test('fetches data when button is clicked', () => {
        const initialState: RootState = { onThisDay: { loading: false, data: [], error: null } };
        const { store } = renderWithProviders(<App />, { initialState });
        fireEvent.click(screen.getByText('Fetch On This Day'));
        const actions = store.getState();
        expect(actions.onThisDay.loading).toEqual(true);
    });
});
