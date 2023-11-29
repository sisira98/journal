import { createSlice } from "@reduxjs/toolkit";
import {createJournal, getJournal, editJournal, listCategory, listJournals, totalListJournal, addCategory, selectJournal} from './action'

const initialState = {
    sharedData: null,
    selectedEntryId: null,
    selectedEntry: null,
    totalList: [],
    listData: [],
    catList: [],
    trashList: [],
    accessToken: null,
  };

  const journalSlice = createSlice({
    name:"journalSlice",
    initialState,
    reducers : {
    },
    extraReducers : {
        [createJournal.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [getJournal.fulfilled] :(state,action)=>{
            state.selectedEntry = action.payload
        },
        [editJournal.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [listCategory.fulfilled] :(state,action)=>{
            state.catList = action.payload
        },
        [listJournals.fulfilled] :(state,action)=>{
            state.listData = action.payload
        },
        [totalListJournal.fulfilled] :(state,action)=>{
            state.totalList = action.payload
        },
        [addCategory.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [selectJournal.fulfilled] :(state,action)=>{
            state.selectedEntryId = action.payload
        },
    }
})

export default journalSlice.reducer