import { createSlice } from "@reduxjs/toolkit";
import { getStartChat } from "./userChatOperations";

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userChatSlice = createSlice({
  name: "userChat",
  initialState: {
    startTheme: {},
  },
  extraReducers: (builder) =>
    builder
      .addCase(getStartChat.pending, handlePending)
      .addCase(getStartChat.fulfilled, (state, action) => {
        state.startTheme.push(action.payload.result);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getStartChat.rejected, handleRejected),
});

export const userChatReducer = userChatSlice.reducer;
