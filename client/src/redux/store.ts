import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import breedReducer from './breedSlice';
import categorieReducer from "./categorieSlice";
import catsReducer from "./catSlice";

const store = configureStore({
    reducer: {
        breed: breedReducer,
        categorie: categorieReducer,
        cats: catsReducer
    }
})

export default store;

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector