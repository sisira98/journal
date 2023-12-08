import { createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_API_URL


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

export const getJournal = createAsyncThunk("getJournal" , async({entryId, accessToken})=>{
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
