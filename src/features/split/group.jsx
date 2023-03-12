import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isgrpOpen:false,
    
}

const groupSlice=createSlice({
    name:'group',
    initialState,
    reducers:{
        openModal:(state,action)=>{
            state.isgrpOpen=true;
        },
        closeModal:(state,action)=>{
            state.isgrpOpen=false;
        },
        
    }
})

export const {openModal,closeModal}=groupSlice.actions;
export default groupSlice.reducer;