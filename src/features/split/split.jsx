import { createSlice } from "@reduxjs/toolkit"


const initialState={
    isOpen:false,
    members:[],
    getm:0,
    givem:0
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
        },
        getmon:(state,action)=>{
            state.getm=action.payload;
        },
        givemon:(state,action)=>{
            state.givem=action.payload;
        }
    }
})

export const {openModal,closeModal,addMembers,getmon,givemon}=splitSlice.actions;
export default splitSlice.reducer;