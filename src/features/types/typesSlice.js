import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "Blue-eyed": {
        "img": "./typesPics/blue_eyed.jpg",
        "alt": "Blue-eyed Cockatoo",
        "description": "Test Blue Eyed",
    },
    "Cockatiel": {
        "img": "./typesPics/cockatiel.jpg",
        "alt": "Cockatiel",
        "description": "Test Cockatiel",
    },
    "Galah": {
        "img": "./typesPics/galah.jpg",
        "alt": "Galah",
        "description": "Test Galah",
    },
    "Gang-gang": {
        "img": "./typesPics/gang_gang.jpg",
        "alt": "Gang-gang Cockatoo",
        "description": "Test Gang Gang",
    },
    "Major Mitchell": {
        "img": "./typesPics/major_mitchell.jpg",
        "alt": "Major Mitchell's Cockatoo",
        "description": "Test Major Mitchell",
    },
    "Palm": {
        "img": "./typesPics/palm.jpg",
        "alt": "Palm Cockatoo",
        "description": "Test Palm",
    },
    "Red-Tailed Black": {
        "img": "./typesPics/red_tailed.jpg",
        "alt": "Red-tailed Black Cockatoo",
        "description": "Test Red-tailed Black",
    },
    "Sulphur-crested": {
        "img": "./typesPics/sulphur_crested.jpg",
        "alt": "Sulphur-crested Cockatoo",
        "description": "Test Sulphur Crested",
    },
    "Umbrella": {
        "img": "./typesPics/umbrella.jpg",
        "alt": "Umbrella Cockatoo",
        "description": "Test Umbrella",
    },
    "Yellow-tailed Black": {
        "img": "./typesPics/yellow_tailed.jpg",
        "alt": "Yellow-tailed Black Cockatoo",
        "description": "Test Yellow-tailed Black",
    },
};

export const typesSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {},
});

export const selectTypes = (state) => state.types;

export default typesSlice.reducer;