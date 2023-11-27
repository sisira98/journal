import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_API_URL
const initialState = {
    user:"",
    token:"",
    loading:false,
    msg:null,
    error:null
}

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
    console.log(name, email,password);
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
const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers : {
        addToken: (state, action)=>{
            state.token = localStorage.getItem("accessToken")
        },
        addUser: (state, action)=>{
            state.user = localStorage.getItem("name")
        },
        logOut: (state, action)=>{
            state.token = null
            localStorage.clear()
        }
    },
    extraReducers : {
        [userSignUp.pending] :(state)=>{
            state.loading =true
        },
        [userSignUp.fulfilled] :(state,{payload:{error,msg}})=>{
            state.loading =false
            if(error){
                state.error = error
            }else{
                state.msg = msg
            }
        },
        [userSignUp.rejected] :(state,action)=>{
            state.loading =false
        },
        [userLogin.pending] :(state)=>{
            state.loading =true
        },
        [userLogin.fulfilled] :(state,action)=>{
            state.loading =false
            state.user =action.payload.name
            state.token = action.payload.token
            localStorage.setItem('accessToken', action.payload.token);
            localStorage.setItem('name', action.payload.name);
        },
        [userLogin.rejected] :(state,action)=>{
            state.loading =false
            state.error = action.payload
        }
    }
})

export const {addToken,addUser,logOut} = authSlice.actions
export default authSlice.reducer