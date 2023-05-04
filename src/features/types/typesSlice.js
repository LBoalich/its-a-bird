import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "Blue-eyed": {
        "imgXS": "./typesPicsXS/blue_eyed.webp",
        "imgS": "./typesPicsS/blue_eyed.webp",
        "imgM": "./typesPicsM/blue_eyed.webp",
        "imgL": "./typesPicsL/blue_eyed.webp",
        "alt": "Blue-eyed Cockatoo",
    },
    "Cockatiel": {
        "imgXS": "./typesPicsXS/cockatiel.webp",
        "imgS": "./typesPicsS/cockatiel.webp",
        "imgM": "./typesPicsM/cockatiel.webp",
        "imgL": "./typesPicsL/cockatiel.webp",
        "alt": "Cockatiel",
    },
    "Galah": {
        "imgXS": "./typesPicsXS/galah.webp",
        "imgS": "./typesPicsS/galah.webp",
        "imgM": "./typesPicsM/galah.webp",
        "imgL": "./typesPicsL/galah.webp",
        "alt": "Galah Cockatoo",
    },
    "Gang-gang": {
        "imgXS": "./typesPicsXS/gang_gang.webp",
        "imgS": "./typesPicsS/gang_gang.webp",
        "imgM": "./typesPicsM/gang_gang.webp",
        "imgL": "./typesPicsL/gang_gang.webp",
        "alt": "Gang-gang Cockatoo",
    },
    "Major Mitchell": {
        "imgXS": "./typesPicsXS/major_mitchell.webp",
        "imgS": "./typesPicsS/major_mitchell.webp",
        "imgM": "./typesPicsM/major_mitchell.webp",
        "imgL": "./typesPicsL/major_mitchell.webp",
        "alt": "Major Mitchell's Cockatoo",
    },
    "Palm": {
        "imgXS": "./typesPicsXS/palm.webp",
        "imgS": "./typesPicsS/palm.webp",
        "imgM": "./typesPicsM/palm.webp",
        "imgL": "./typesPicsL/palm.webp",
        "alt": "Palm Cockatoo",
    },
    "Red-Tailed Black": {
        "imgXS": "./typesPicsXS/red_tailed.webp",
        "imgS": "./typesPicsS/red_tailed.webp",
        "imgM": "./typesPicsM/red_tailed.webp",
        "imgL": "./typesPicsL/red_tailed.webp",
        "alt": "Red-tailed Black Cockatoo",
    },
    "Sulphur-crested": {
        "imgXS": "./typesPicsXS/sulphur_crested.webp",
        "imgS": "./typesPicsS/sulphur_crested.webp",
        "imgM": "./typesPicsM/sulphur_crested.webp",
        "imgL": "./typesPicsL/sulphur_crested.webp",
        "alt": "Sulphur-crested Cockatoo",
    },
    "Umbrella": {
        "imgXS": "./typesPicsXS/umbrella.webp",
        "imgS": "./typesPicsS/umbrella.webp",
        "imgM": "./typesPicsM/umbrella.webp",
        "imgL": "./typesPicsL/umbrella.webp",
        "alt": "Umbrella Cockatoo",
    },
    "Yellow-tailed Black": {
        "imgXS": "./typesPicsXS/yellow_tailed.webp",
        "imgS": "./typesPicsS/yellow_tailed.webp",
        "imgM": "./typesPicsM/yellow_tailed.webp",
        "imgL": "./typesPicsL/yellow_tailed.webp",
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
