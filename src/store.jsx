import { configureStore } from "@reduxjs/toolkit";
import splitReducer from "./features/split/split.jsx"

export const store=configureStore({
    reducer:{
        split:splitReducer
    }
})