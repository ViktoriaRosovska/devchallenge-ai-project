import { createSlice } from "@reduxjs/toolkit";

import { login } from "./userAuthOperations";

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: {},
    token: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, handleRejected),
});

export const userAuthReducer = userAuthSlice.reducer;
