import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
const getCategoryNameSlices = createSlice({
  name: "getCategoryNameSlices",
  initialState,
  reducers: {
    getValue: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const {getValue}=getCategoryNameSlices.actions;
export default getCategoryNameSlices;
