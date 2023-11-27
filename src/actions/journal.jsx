import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_API_URL
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

export const createJournal = createAsyncThunk("createJournal" , async({title, content, category, accessToken})=>{
    const response = await fetch(`${apiUrl}/journal/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        },
        body: JSON.stringify({
            title,
            content,
            category,
        }),
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const deleteJournal = createAsyncThunk("deleteJournal" , async({entryId, accessToken})=>{
    const headers = {
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
    };
    const response = await fetch(`${apiUrl}/journal/${entryId}`, {
        method: 'DELETE',
        headers,
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const getJournal = createAsyncThunk("getJournal" , async({entryId, accessToken})=>{
    console.log(accessToken);
    const response = await fetch(`${apiUrl}/journal/${entryId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
          },
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const editJournal = createAsyncThunk("editJournal" , async({entryId, shareTitle, shareContent, accessToken})=>{
    const response = await fetch(`${apiUrl}/journal/${entryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        },
        body: JSON.stringify({
            title: shareTitle,
            content: shareContent,
        }),
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const listCategory = createAsyncThunk("listCategory" , async({accessToken})=>{
    const response = await fetch(`${apiUrl}/category/list`, {
        headers : {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const listJournals = createAsyncThunk("listJournals" , async({accessToken, pageNo, searchBy})=>{
    console.log(pageNo,searchBy);
    const response = await fetch(`${apiUrl}/journal/search?page=${pageNo}&searchBy=${searchBy}&size=3`, {
        headers : {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const listTrash= createAsyncThunk("listTrash" , async({accessToken})=>{
    const response = await fetch(`${apiUrl}/journal/trash-list`, {
        headers : {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const restoreJournal= createAsyncThunk("restoreJournal" , async({entryId, accessToken})=>{
    const response = await fetch(`${apiUrl}/journal/${entryId}/restore`, {
        headers : {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const totalListJournal= createAsyncThunk("totalListJournal" , async({accessToken})=>{
    const response = await fetch(`${apiUrl}/journal/list`, {
        headers : {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const addToTrash= createAsyncThunk("addToTrash" , async({entryId, accessToken})=>{
    console.log(accessToken);
    const response = await fetch(`${apiUrl}/journal/${entryId}`, {
        method: 'PATCH',
        headers : {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const addCategory= createAsyncThunk("addCategory" , async({category, accessToken})=>{
    const response = await fetch(`${apiUrl}/category/create`, {
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
                },
                body: category
            });
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const selectJournal= createAsyncThunk("selectJournal" , async(entryId)=>{
    try{
        const result = entryId
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
const journalSlice = createSlice({
    name:"journalSlice",
    initialState,
    reducers : {
    },
    extraReducers : {
        [createJournal.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [deleteJournal.fulfilled] :(state,action)=>{
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
        [listTrash.fulfilled] :(state,action)=>{
            state.trashList = action.payload
        },
        [restoreJournal.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [totalListJournal.fulfilled] :(state,action)=>{
            state.totalList = action.payload
        },
        [addToTrash.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [addCategory.fulfilled] :(state,action)=>{
            state.sharedData = action.payload
        },
        [selectJournal.fulfilled] :(state,action)=>{
            state.selectedEntryId = action.payload
        },
    }
})

// export const {addToken,addUser,logOut} = journalSlice.actions
export default journalSlice.reducer