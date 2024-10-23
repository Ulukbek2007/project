import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlices = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    getDataCart: (state, { payload }) => {
      state.cart=[...state.cart,payload]
    },
    deleteCart:(state,{payload})=>{
      const filtered=state.cart.filter(el=>el.id!==payload)
      state.cart=filtered
    }
  },
});

export const { getDataCart,deleteCart } = cartSlices.actions;
export default cartSlices;
