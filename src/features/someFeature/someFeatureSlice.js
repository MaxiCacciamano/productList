import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const someFeatureSlice = createSlice({
    name: 'someFeature',
    initialState,
    reducers:{
        increment:(state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = someFeatureSlice.actions;
export default someFeatureSlice.reducer