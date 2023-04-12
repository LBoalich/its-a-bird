import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    results: {
        "Blue-eyed": {
            "img": "./resultsPics/cuddlingBlue.jpg",
            "alt": "Blue-eyed Cockatoo",
            "description": "Test Blue Eyed",
        },
        "Cockatiel": {
            "img": "./resultsPics/singingCockatiel.jpg",
            "alt": "Cockatiel",
            "description": "Test Cockatiel",
        },
        "Galah": {
            "img": "./resultsPics/funnyGalah.jpg",
            "alt": "Galah",
            "description": "Test Galah",
        },
        "Gang-gang": {
            "img": "./resultsPics/wineGangGang.jpg",
            "alt": "Gang-gang Cockatoo",
            "description": "Test Gang Gang",
        },
        "Major Mitchell": {
            "img": "./resultsPics/modelMajorMitchell1.jpg",
            "alt": "Major Mitchell's Cockatoo",
            "description": "Test Major Mitchell",
        },
        "Palm": {
            "img": "./resultsPics/drummerPalm.jpg",
            "alt": "Palm Cockatoo",
            "description": "Test Palm",
        },
        "Red-Tailed Black": {
            "img": "./resultsPics/kingRedTailed.jpg",
            "alt": "Red-tailed Black Cockatoo",
            "description": "Test Red-tailed Black",
        },
        "Sulphur-crested": {
            "img": "./resultsPics/puzzleSulphur.jpg",
            "alt": "Sulphur-crested Cockatoo",
            "description": "Test Sulphur Crested",
        },
        "Umbrella": {
            "img": "./resultsPics/holdingUmbrella.jpg",
            "alt": "Umbrella Cockatoo",
            "description": "Test Umbrella",
        },
        "Yellow-tailed Black": {
            "img": "./resultsPics/redCarpetYellow.jpg",
            "alt": "Yellow-tailed Black Cockatoo",
            "description": "Test Yellow-tailed Black",
        },
    },
    finalAnswer: "",
};

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        saveFinalAnswer: (state, action) => {
            state.finalAnswer = action.payload;
        }
    },
});

export const { saveFinalAnswer } = resultsSlice.actions;

export const selectResults = (state) => state.results.results;
export const selectFinalAnswer = (state) => state.results.finalAnswer;

export default resultsSlice.reducer;