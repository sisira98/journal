import { createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_API_URL

export const userLogin = createAsyncThunk("userLogin" , async({name, password})=>{
    const response = await fetch(`${apiUrl}/journal/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password,
        }),
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})
export const userSignUp = createAsyncThunk("userSignUp" , async({name, email, password})=>{
    const response = await fetch(`${apiUrl}/journal/sign-up`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
    })
    try{
        const result = await response.json()
        return result
    }catch (error){
        return isRejectedWithValue(error.response)
    }
})