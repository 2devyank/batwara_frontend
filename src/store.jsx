import { configureStore } from "@reduxjs/toolkit";
import splitReducer from "./features/split/split.jsx"
import groupReducer from "./features/split/group.jsx"
import memberReducer from "./features/split/member.jsx"

export const store=configureStore({
    reducer:{
        split:splitReducer,
        group:groupReducer,
        member:memberReducer,
    }
})