import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: "",
};
const getPathName = createSlice({
  name: "getPathName",
  initialState,
  reducers: {
    getPath: (state, { payload }) => {
      state.path = payload;
    },
  },
});
export const {getPath}=getPathName.actions;
export default getPathName
