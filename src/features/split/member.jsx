import { createSlice } from "@reduxjs/toolkit";

const initialState={
    ismemOpen:false,
    
}

const memberSlice=createSlice({
    name:'member',
    initialState,
    reducers:{
        openMember:(state,action)=>{
            state.ismemOpen=true;
        },
        closeMember:(state,action)=>{
            state.ismemOpen=false;
        },
        
    }
})

export const {openMember,closeMember}=memberSlice.actions;
export default memberSlice.reducer;