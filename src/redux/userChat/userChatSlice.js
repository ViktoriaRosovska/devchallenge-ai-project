import { createSlice } from "@reduxjs/toolkit";
import { getSendVoice, getStartChat, getStopChat } from "./userChatOperations";

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
    voice: null,
    result: {},
  },
  extraReducers: (builder) =>
    builder
      .addCase(getStartChat.pending, handlePending)
      .addCase(getStartChat.fulfilled, (state, action) => {
        state.startTheme = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getStartChat.rejected, handleRejected)
      .addCase(getSendVoice.pending, handlePending)
      .addCase(getSendVoice.fulfilled, (state, action) => {
        state.voice = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getStopChat.rejected, handleRejected)
      .addCase(getStopChat.pending, handlePending)
      .addCase(getStopChat.fulfilled, (state, action) => {
        state.result = action.payload;
        state.isLoading = false;
        state.error = null;
      }),
});

export const userChatReducer = userChatSlice.reducer;
