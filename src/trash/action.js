import { createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_API_URL

export const deleteJournal = createAsyncThunk("deleteJournal", async ({ entryId, accessToken }) => {
    const headers = {
        ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
    };
    const response = await fetch(`${apiUrl}/journal/${entryId}`, {
        method: 'DELETE',
        headers,
    })
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return isRejectedWithValue(error.response)
    }
})

export const listTrash = createAsyncThunk("listTrash", async ({ accessToken }) => {
    const response = await fetch(`${apiUrl}/journal/trash-list`, {
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return isRejectedWithValue(error.response)
    }
})

export const restoreJournal = createAsyncThunk("restoreJournal", async ({ entryId, accessToken }) => {
    const response = await fetch(`${apiUrl}/journal/${entryId}/restore`, {
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return isRejectedWithValue(error.response)
    }
})

export const addToTrash = createAsyncThunk("addToTrash", async ({ entryId, accessToken }) => {
    const response = await fetch(`${apiUrl}/journal/${entryId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }),
        }
    })
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return isRejectedWithValue(error.response)
    }
})