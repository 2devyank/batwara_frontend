import { createSlice } from "@reduxjs/toolkit"


const initialState={
    isOpen:false
}

const splitSlice=createSlice({
    name:'split',
    initialState,
    reducers:{
        openModal:(state,action)=>{
            state.isOpen=true;
        },
        closeModal:(state,action)=>{
            state.isOpen=false;
        }
    }
})

export const {openModal,closeModal}=splitSlice.actions;
export default splitSlice.reducer;