import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Cats } from "../types/types.d";
import { config } from "../types/config";



const initialState:Cats = {
    image: '',
    loadingImage: false,
    error: {
        image: ''
    }
}

//Async Actions
export const getHomeImage = createAsyncThunk(
    'cats/getHomeImage',
    async (_, thunkAPI) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${config.backUrl}/image`
            })
            return response.data[0].url
        } catch (err:any) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)


//Reducer
const catsSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHomeImage.pending, (state) => {
            state.loadingImage = true
        })
        builder.addCase(getHomeImage.fulfilled, (state, action) => {
            state.loadingImage = false
            state.image = action.payload
        })
        builder.addCase(getHomeImage.rejected, (state, action) => {
            state.loadingImage = false
            state.error.image = action.payload as string
        })
    }
})


export default catsSlice.reducer