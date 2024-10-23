import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
const searchValue = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    getSearchValue: (state, { payload }) => {
      state.value = payload;
    },
  },
});
export const { getSearchValue } = searchValue.actions;
export default searchValue;
