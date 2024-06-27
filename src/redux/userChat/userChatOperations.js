import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://drink-master-app.onrender.com/api/";

export const getStartChat = createAsyncThunk("userChat/startChat", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/begin");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
