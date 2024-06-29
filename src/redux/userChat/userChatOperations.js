import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/chats/";

export const getStartChat = createAsyncThunk("userChat/getStartChat", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/begin");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getSendVoice = createAsyncThunk("userChat/getSendVoice", async ({ voice, chat_id }, thunkAPI) => {
  try {
    const response = await axios.post(`/${chat_id}/speak`, voice, {
      headers: { "Content-Type": "multipart/form-data" },
      responseType: "blob",
    });

    return URL.createObjectURL(response.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getStopChat = createAsyncThunk("userChat/getStopChat", async (chat_id, thunkAPI) => {
  try {
    const response = await axios.post(`/${chat_id}/finish`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
