import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "Blue-eyed": {
        "img": "./typesPics/blue_eyed.webp",
        "alt": "Blue-eyed Cockatoo",
    },
    "Cockatiel": {
        "img": "./typesPics/cockatiel.webp",
        "alt": "Cockatiel",
    },
    "Galah": {
        "img": "./typesPics/galah.webp",
        "alt": "Galah Cockatoo",
    },
    "Gang-gang": {
        "img": "./typesPics/gang_gang.webp",
        "alt": "Gang-gang Cockatoo",
    },
    "Major Mitchell": {
        "img": "./typesPics/major_mitchell.webp",
        "alt": "Major Mitchell's Cockatoo",
    },
    "Palm": {
        "img": "./typesPics/palm.webp",
        "alt": "Palm Cockatoo",
    },
    "Red-Tailed Black": {
        "img": "./typesPics/red_tailed.webp",
        "alt": "Red-tailed Black Cockatoo",
    },
    "Sulphur-crested": {
        "img": "./typesPics/sulphur_crested.webp",
        "alt": "Sulphur-crested Cockatoo",
    },
    "Umbrella": {
        "img": "./typesPics/umbrella.webp",
        "alt": "Umbrella Cockatoo",
    },
    "Yellow-tailed Black": {
        "img": "./typesPics/yellow_tailed.webp",
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
