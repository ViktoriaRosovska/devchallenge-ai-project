import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/chats/";

export const login = createAsyncThunk("userAuth/login", async (_, thunkAPI) => {
  try {
    console.log("login");
    const { data } = await axios.post("/login");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
