import { createSlice } from "@reduxjs/toolkit"


const initialState={
    isOpen:false,
    members:[]
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
        },
        addMembers:(state,action)=>{
            state.members=[...state.members,action.payload];
        }
    }
})

export const {openModal,closeModal,addMembers}=splitSlice.actions;
export default splitSlice.reducer;