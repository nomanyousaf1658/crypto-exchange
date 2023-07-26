import { configureStore } from '@reduxjs/toolkit';
import selectUserReducer from './reducers/selectUserReducer';

const store = configureStore({
    reducer: {
        selectUserReducer: selectUserReducer
    }
});

export default store;