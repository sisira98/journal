import { createSlice } from "@reduxjs/toolkit";
import {listTrash, addToTrash, restoreJournal, deleteJournal} from './action'

const initialState = {
    sharedData: null,
    trashList: [],
    accessToken: null,
  };

  const trashSlice = createSlice({
    name:"trashSlice",
    initialState,
    reducers : {
    },
    extraReducers : {
        [deleteJournal.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [listTrash.fulfilled] :(state,action)=>{
            state.trashList = action.payload
        },
        [restoreJournal.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [addToTrash.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
    }
})

export default trashSlice.reducer