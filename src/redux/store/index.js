import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favReducer from '../reducers/favourites'; 
import jobReducer from '../reducers/job'; 

const rootReducer = combineReducers({
    fav: favReducer,
    job: jobReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;