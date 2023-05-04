import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    results: {
        "Blue-eyed": {
            "img": "./resultsPics/cuddlingBlue.webp",
            "img90": "./resultsPics90/cuddlingBlue.webp",
            "img80": "./resultsPics80/cuddlingBlue.webp",
            "img60": "./resultsPics60/cuddlingBlue.webp",
            "img45": "./resultsPics45/cuddlingBlue.webp",
            "img40": "./resultsPics40/cuddlingBlue.webp",
            "img30": "./resultsPics30/cuddlingBlue.webp",
            "img20": "./resultsPics20/cuddlingBlue.webp",
            "alt": "Blue-eyed Cockatoos cuddling",
        },
        "Cockatiel": {
            "img": "./resultsPics/singingCockatiel.webp",
            "img90": "./resultsPics90/singingCockatiel.webp",
            "img80": "./resultsPics80/singingCockatiel.webp",
            "img60": "./resultsPics60/singingCockatiel.webp",
            "img45": "./resultsPics45/singingCockatiel.webp",
            "img40": "./resultsPics40/singingCockatiel.webp",
            "img30": "./resultsPics30/singingCockatiel.webp",
            "img20": "./resultsPics20/singingCockatiel.webp",
            "alt": "Cockatiel singing",
        },
        "Galah": {
            "img": "./resultsPics/funnyGalah.webp",
            "img90": "./resultsPics90/funnyGalah.webp",
            "img80": "./resultsPics80/funnyGalah.webp",
            "img60": "./resultsPics60/funnyGalah.webp",
            "img45": "./resultsPics45/funnyGalah.webp",
            "img40": "./resultsPics40/funnyGalah.webp",
            "img30": "./resultsPics30/funnyGalah.webp",
            "img20": "./resultsPics20/funnyGalah.webp",
            "alt": "Galah Cockatoo tap dancing",
        },
        "Gang-gang": {
            "img": "./resultsPics/wineGangGang.webp",
            "img90": "./resultsPics90/wineGangGang.webp",
            "img80": "./resultsPics80/wineGangGang.webp",
            "img60": "./resultsPics60/wineGangGang.webp",
            "img45": "./resultsPics45/wineGangGang.webp",
            "img40": "./resultsPics40/wineGangGang.webp",
            "img30": "./resultsPics30/wineGangGang.webp",
            "img20": "./resultsPics20/wineGangGang.webp",
            "alt": "Gang-gang Cockatoo opening wine bottle",
        },
        "Major Mitchell": {
            "img": "./resultsPics/modelMajorMitchell.webp",
            "img90": "./resultsPics90/modelMajorMitchell.webp",
            "img80": "./resultsPics80/modelMajorMitchell.webp",
            "img60": "./resultsPics60/modelMajorMitchell.webp",
            "img45": "./resultsPics45/modelMajorMitchell.webp",
            "img40": "./resultsPics40/modelMajorMitchell.webp",
            "img30": "./resultsPics30/modelMajorMitchell.webp",
            "img20": "./resultsPics20/modelMajorMitchell.webp",
            "alt": "Major Mitchell's Cockatoo modeling",
        },
        "Palm": {
            "img": "./resultsPics/drummerPalm.webp",
            "img90": "./resultsPics90/drummerPalm.webp",
            "img80": "./resultsPics80/drummerPalm.webp",
            "img60": "./resultsPics60/drummerPalm.webp",
            "img45": "./resultsPics45/drummerPalm.webp",
            "img40": "./resultsPics40/drummerPalm.webp",
            "img30": "./resultsPics30/drummerPalm.webp",
            "img20": "./resultsPics20/drummerPalm.webp",
            "alt": "Palm Cockatoo playing drums",
        },
        "Red-Tailed Black": {
            "img": "./resultsPics/kingRedTailed.webp",
            "img90": "./resultsPics90/kingRedTailed.webp",
            "img80": "./resultsPics80/kingRedTailed.webp",
            "img60": "./resultsPics60/kingRedTailed.webp",
            "img45": "./resultsPics45/kingRedTailed.webp",
            "img40": "./resultsPics40/kingRedTailed.webp",
            "img30": "./resultsPics30/kingRedTailed.webp",
            "img20": "./resultsPics20/kingRedTailed.webp",
            "alt": "Red-tailed Black Cockatoo wearing kings crown",
        },
        "Sulphur-crested": {
            "img": "./resultsPics/puzzleSulphur.webp",
            "img90": "./resultsPics90/puzzleSulphur.webp",
            "img80": "./resultsPics80/puzzleSulphur.webp",
            "img60": "./resultsPics60/puzzleSulphur.webp",
            "img45": "./resultsPics45/puzzleSulphur.webp",
            "img40": "./resultsPics40/puzzleSulphur.webp",
            "img30": "./resultsPics30/puzzleSulphur.webp",
            "img20": "./resultsPics20/puzzleSulphur.webp",
            "alt": "Sulphur-crested Cockatoo solving rubix cube",
        },
        "Umbrella": {
            "img": "./resultsPics/holdingUmbrella.webp",
            "img90": "./resultsPics90/holdingUmbrella.webp",
            "img80": "./resultsPics80/holdingUmbrella.webp",
            "img60": "./resultsPics60/holdingUmbrella.webp",
            "img45": "./resultsPics45/holdingUmbrella.webp",
            "img40": "./resultsPics40/holdingUmbrella.webp",
            "img30": "./resultsPics30/holdingUmbrella.webp",
            "img20": "./resultsPics20/holdingUmbrella.webp",
            "alt": "Umbrella Cockatoo holding umbrella",
        },
        "Yellow-tailed Black": {
            "img": "./resultsPics/redCarpetYellow.webp",
            "img90": "./resultsPics90/redCarpetYellow.webp",
            "img80": "./resultsPics80/redCarpetYellow.webp",
            "img60": "./resultsPics60/redCarpetYellow.webp",
            "img45": "./resultsPics45/redCarpetYellow.webp",
            "img40": "./resultsPics40/redCarpetYellow.webp",
            "img30": "./resultsPics30/redCarpetYellow.webp",
            "img20": "./resultsPics20/redCarpetYellow.webp",
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
