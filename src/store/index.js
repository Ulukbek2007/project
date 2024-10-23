import { configureStore } from "@reduxjs/toolkit";
import getProductSlices from "./slices/getProductSlices";
import getPathName from "./slices/getPathName";
import getCategoryNameSlices from "./slices/getCategoryNameSlices";
import getDetailProductSlices from "./slices/getDetailProductSlices";
import heartSLices from "./slices/heartSlices";
import cartSlices from "./slices/cartSlices";
import searchDataSlices from "./slices/searchDataSlices";
import searchValue from "./slices/searchValue";

const store = configureStore({
  reducer: {
    data: getProductSlices.reducer,
    detailData: getDetailProductSlices.reducer,
    path: getPathName.reducer,
    categoryValue: getCategoryNameSlices.reducer,
    heart: heartSLices.reducer,
    cart: cartSlices.reducer,
    search:searchDataSlices.reducer,
    value:searchValue.reducer
  },
});
export default store;
