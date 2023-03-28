import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "Blue Eyed": {
        "img": "./resultsPics/blue_eyed.jpg",
        "description": "Test Blue Eyed",
    },
    "Cockatiel": {
        "img": "./resultsPics/cockatiel.jpg",
        "description": "Test Cockatiel",
    },
    "Galah": {
        "img": "./resultsPics/galah.jpg",
        "description": "Test Galah",
    },
    "Gang Gang": {
        "img": "./resultsPics/gang_gang.jpg",
        "description": "Test Gang Gang",
    },
    "Major Mitchell": {
        "img": "./resultsPics/major_mitchell.jpg",
        "description": "Test Major Mitchell",
    },
    "Palm": {
        "img": "./resultsPics/palm.jpg",
        "description": "Test Palm",
    },
    "Red-Tailed Black": {
        "img": "./resultsPics/red_tailed.jpg",
        "description": "Test Red-tailed Black",
    },
    "Sulphur Crested": {
        "img": "./resultsPics/sulphur_crested.jpg",
        "description": "Test Sulphur Crested",
    },
    "Umbrella": {
        "img": "./resultsPics/umbrella.jpg",
        "description": "Test Umbrella",
    },
    "Yellow-tailed Black": {
        "img": "./resultsPics/yellow_tailed.jpg",
        "description": "Test Yellow-tailed Black",
    },
};

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {},
});

export default resultsSlice.reducer;