import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const authenticationSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReducer: (state) => {
      state.isAuthenticated = true;
    },
    logoutReducer: (state) => {
      state.isAuthenticated = initialState.isAuthenticated;
    },
  },
});

export const { loginReducer, logoutReducer } = authenticationSlice.actions;
export default authenticationSlice.reducer;
