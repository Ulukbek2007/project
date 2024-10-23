import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heart: [],
};

const heartSlices = createSlice({
  name: "heartSlices",
  initialState,
  reducers: {
    getDataHeart: (state, { payload }) => {
      state.heart = [...state.heart, payload];
    },
    deleteHeart: (state, { payload }) => {
      const filtered = state.heart.filter((el) => el.id !== payload);
      state.heart = filtered;
    },
  },
});

export const { getDataHeart, deleteHeart } = heartSlices.actions;
export default heartSlices;
