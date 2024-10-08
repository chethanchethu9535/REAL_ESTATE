import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userslice = createSlice({
    name: 'user',
    initialState,
    reducers: {
                signInstart: (state) => {
                state.loading = true;
                 },
                     signInSuccess: (state, action) => {
                     state.currentUser = action.payload;
                     state.loading = false;
                    state.error = null;
                             },
                            signInFailure: (state,action) => {
                            state.error = action.payload;
                            state.loading = false;
                             }
             }
});
export const { signInstart, signInSuccess, signInFailure } = userslice.actions;
export default userslice.reducer;