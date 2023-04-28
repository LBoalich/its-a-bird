import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    results: {
        "Blue-eyed": {
            "img": "./resultsPics/cuddlingBlue.webp",
            "alt": "Blue-eyed Cockatoos cuddling",
        },
        "Cockatiel": {
            "img": "./resultsPics/singingCockatiel.webp",
            "alt": "Cockatiel singing",
        },
        "Galah": {
            "img": "./resultsPics/funnyGalah.webp",
            "alt": "Galah Cocketoo tap dancing",
        },
        "Gang-gang": {
            "img": "./resultsPics/wineGangGang.webp",
            "alt": "Gang-gang Cockatoo opening wine bottle",
        },
        "Major Mitchell": {
            "img": "./resultsPics/modelMajorMitchell1.webp",
            "alt": "Major Mitchell's Cockatoo modeling",
        },
        "Palm": {
            "img": "./resultsPics/drummerPalm.webp",
            "alt": "Palm Cockatoo playing drums",
        },
        "Red-Tailed Black": {
            "img": "./resultsPics/kingRedTailed.webp",
            "alt": "Red-tailed Black Cockatoo wearing kings crown",
        },
        "Sulphur-crested": {
            "img": "./resultsPics/puzzleSulphur.webp",
            "alt": "Sulphur-crested Cockatoo solving rubix cube",
        },
        "Umbrella": {
            "img": "./resultsPics/holdingUmbrella.webp",
            "alt": "Umbrella Cockatoo holding umbrella",
        },
        "Yellow-tailed Black": {
            "img": "./resultsPics/redCarpetYellow.webp",
            "alt": "Yellow-tailed Black Cockatoo on red carpet",
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
