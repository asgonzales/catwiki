import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { CategorieState, http, CategorieNames, reqCategorieImages } from "../types.d";



const initialState:CategorieState = {
    names: [],
    loadingNames: false,
    urls: [],
    loadingUrls: false,
    error: {
        names: '',
        url: ''
    }
}

//Async actions
export const getCategorieNames = createAsyncThunk(
    'categories/getNames',
    async (_, thunkAPI) => {
        try {
            const response = await axios<CategorieNames[]>({
                method: http.GET,
                url: `${http.BASE_URL}/categories`
            })
            return response.data
        } catch (err:any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const getCategorieImages = createAsyncThunk(
    'categories/getImages',
    async (cat:reqCategorieImages, thunkAPI) => {
        try {
            const response = await axios<string[]>({
                method: http.GET,
                url: `${http.BASE_URL}/categorie/${cat.id}?page=${cat.page}`
            })
            return response.data
        } catch (err:any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)


const categorieSlice = createSlice({
    name: 'categorieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategorieNames.pending, (state) => {
            state.loadingNames = true
        })
        builder.addCase(getCategorieNames.fulfilled, (state, action) => {
            state.loadingNames = false
            state.names = action.payload
        })
        builder.addCase(getCategorieNames.rejected, (state, action) => {
            state.loadingNames = false
            state.error.names = action.payload as string
        })
        builder.addCase(getCategorieImages.pending, (state) => {
            state.loadingUrls = true
        })
        builder.addCase(getCategorieImages.fulfilled, (state, action) => {
            state.loadingUrls = false
            state.urls = action.payload
        })
        builder.addCase(getCategorieImages.rejected, (state, action) => {
            state.loadingUrls = false
            state.error.url = action.payload as string
        })
    }
})

export default categorieSlice.reducer