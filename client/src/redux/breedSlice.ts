import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { http, BreedState, BreedNames, BreedDetail, BreedImageInterface } from "../types.d";
const initialState:BreedState = {
    names: [],
    loadingNames: false,
    detail: {
        id: '',
        name: '',
        weight: '',
        temperament: '',
        origin: '',
        description: '',
        life_span: '',
        adaptability: 0,
        affection: 0,
        child: 0,
        dog: 0,
        energy: 0,
        health_issues: 0,
        intelligence: 0,
        social_needs: 0,
        image: '',
        wikipedia: '',
    },
    loadingDetail: false,
    images: [],
    loadingImages: false,
    error: {
        name: '',
        detail: '',
        images: ''
    }
}


//async Actions
export const getBreedNames = createAsyncThunk(
    'breed/getBreedNames',
    async (_, thunkAPI) => {
        try {
            const response = await axios<BreedNames[]>({
                method: http.GET,
                url: `${http.BASE_URL}/breeuds`
            })
            return response.data
        } catch (err:any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const getBreedDetails = createAsyncThunk(
    'breed/getBreedDetail',
    async (breedId:string, thunkAPI) => {
        try {
            const response = await axios<BreedDetail>({
                method: http.GET,
                url: `${http.BASE_URL}/breed/${breedId}`
            })
            return response.data
        } catch (err:any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const getBreedImages = createAsyncThunk(
    'breed/getBreedImages',
    async (image:BreedImageInterface, thunkAPI) => {
        try {
            const response = await axios<string[]>({
                method: http.GET,
                url: `${http.BASE_URL}/image/${image.breed}?page=${image.page}`
            })
            return response.data
        } catch (err:any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

//Reducer
export const breedSlice = createSlice({
    name: 'breed',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBreedNames.pending, (state) => {
            state.loadingNames = true
        })
        builder.addCase(getBreedNames.fulfilled, (state, action) => {
            state.names = action.payload
            state.loadingNames = false
        })
        builder.addCase(getBreedNames.rejected, (state, action) => {
            state.loadingNames = false
            // console.log('ERROR', action.payload)
            state.error.name = action.payload as string
        })
        builder.addCase(getBreedDetails.pending, (state) => {
            state.loadingDetail = true
        })
        builder.addCase(getBreedDetails.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loadingDetail = false
        })
        builder.addCase(getBreedDetails.rejected, (state, action) => {
            state.loadingDetail = false
            // console.log('ERROR', action.payload)
            state.error.detail = action.payload as string
        })
        builder.addCase(getBreedImages.pending, (state) => {
            state.loadingImages = true
        })
        builder.addCase(getBreedImages.fulfilled, (state, action) => {
            state.images = action.payload
            state.loadingImages = false
        })
        builder.addCase(getBreedImages.rejected, (state, action) => {
            state.loadingImages = false
            // console.log('ERROR', action.payload)
            state.error.images = action.payload as string
        })
    }
})


export default breedSlice.reducer;