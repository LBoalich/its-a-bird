import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const descriptionsSlice = createSlice({
    name: 'descriptions',
    initialState,
    reducers: {},
});

export const selectDescriptions = (state) => state.descriptions;

export default descriptionsSlice.reducer;