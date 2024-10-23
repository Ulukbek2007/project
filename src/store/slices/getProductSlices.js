import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductSlicesData = createAsyncThunk(
  "getProductSlices",
  async () => {
    const { data } = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    return data;
  }
);
const initialState = {
  data: [],
};
const getProductSlices = createSlice({
  name: "getProductSlices",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(getProductSlicesData.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
  },
});
export default getProductSlices;
