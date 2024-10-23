import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearchData = createAsyncThunk("getSearchData", async () => {
  const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
  return data;
});
const initialState = {
  data: [],
};
const searchDataSlices = createSlice({
  name: "searchDataSlices",
  initialState,
  extraReducers: (build) => {
    build.addCase(getSearchData.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});
export default searchDataSlices;
