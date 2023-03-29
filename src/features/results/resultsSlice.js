import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "Blue Eyed": {
        "img": "./resultsPics/blue_eyed.jpg",
        "alt": "Blue-eyed Cockatoo",
        "description": "Test Blue Eyed",
    },
    "Cockatiel": {
        "img": "./resultsPics/cockatiel.jpg",
        "alt": "Cockatiel",
        "description": "Test Cockatiel",
    },
    "Galah": {
        "img": "./resultsPics/galah.jpg",
        "alt": "Galah",
        "description": "Test Galah",
    },
    "Gang Gang": {
        "img": "./resultsPics/gang_gang.jpg",
        "alt": "Gang-gang Cockatoo",
        "description": "Test Gang Gang",
    },
    "Major Mitchell": {
        "img": "./resultsPics/major_mitchell.jpg",
        "alt": "Major Mitchell's Cockatoo",
        "description": "Test Major Mitchell",
    },
    "Palm": {
        "img": "./resultsPics/palm.jpg",
        "alt": "Palm Cockatoo",
        "description": "Test Palm",
    },
    "Red-Tailed Black": {
        "img": "./resultsPics/red_tailed.jpg",
        "alt": "Red-tailed Black Cockatoo",
        "description": "Test Red-tailed Black",
    },
    "Sulphur Crested": {
        "img": "./resultsPics/sulphur_crested.jpg",
        "alt": "Sulphur-crested Cockatoo",
        "description": "Test Sulphur Crested",
    },
    "Umbrella": {
        "img": "./resultsPics/umbrella.jpg",
        "alt": "Umbrella Cockatoo",
        "description": "Test Umbrella",
    },
    "Yellow-tailed Black": {
        "img": "./resultsPics/yellow_tailed.jpg",
        "alt": "Yellow-tailed Black Cockatoo",
        "description": "Test Yellow-tailed Black",
    },
};

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {},
});

export const selectResults = (state) => state.results;

export default resultsSlice.reducer;