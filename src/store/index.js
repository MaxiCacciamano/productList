import {configureStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import someFeatureReducer from '../features/someFeature/someFeatureSlice';

const store = configureStore({
    reducer:{
        someFeature: someFeatureReducer,
    },
    devTools: composeWithDevTools(),
})

export default store;