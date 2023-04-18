import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "Blue-eyed": {
        "img": "./typesPics/blue_eyed.jpg",
        "alt": "Blue-eyed Cockatoo",
    },
    "Cockatiel": {
        "img": "./typesPics/cockatiel.jpg",
        "alt": "Cockatiel",
    },
    "Galah": {
        "img": "./typesPics/galah.jpg",
        "alt": "Galah Cockatoo",
    },
    "Gang-gang": {
        "img": "./typesPics/gang_gang.jpg",
        "alt": "Gang-gang Cockatoo",
    },
    "Major Mitchell": {
        "img": "./typesPics/major_mitchell.jpg",
        "alt": "Major Mitchell's Cockatoo",
    },
    "Palm": {
        "img": "./typesPics/palm.jpg",
        "alt": "Palm Cockatoo",
    },
    "Red-Tailed Black": {
        "img": "./typesPics/red_tailed.jpg",
        "alt": "Red-tailed Black Cockatoo",
    },
    "Sulphur-crested": {
        "img": "./typesPics/sulphur_crested.jpg",
        "alt": "Sulphur-crested Cockatoo",
    },
    "Umbrella": {
        "img": "./typesPics/umbrella.jpg",
        "alt": "Umbrella Cockatoo",
    },
    "Yellow-tailed Black": {
        "img": "./typesPics/yellow_tailed.jpg",
        "alt": "Yellow-tailed Black Cockatoo",
    },
};

export const typesSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {},
});

export const selectTypes = (state) => state.types;

export default typesSlice.reducer;
