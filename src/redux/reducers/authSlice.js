import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

// register
// logout
//

export const doLogin = createAsyncThunk("user/login", async ({ email, password }, { rejectWithValue }) => {
    const response = await axios.post("https://strapi-store-server.onrender.com/api/auth/local", {
        identifier: email,
        password: password,
    });
    console.log(response);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doLogin.fulfilled, (state, action) => {
            console.log(current(state));
            state.user = action.payload.user;
            state.isLoggedIn = true;

        })
    }
})

export default authSlice.reducer;