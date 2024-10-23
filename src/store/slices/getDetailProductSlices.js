import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getDetailProductData=createAsyncThunk('getDetailProductData',async()=>{
    const {data}=await axios.get('https://api.escuelajs.co/api/v1/products')
    return data
})
const initialState={
data:[]
}
const getDetailProductSlices=createSlice({
    name:'getDetailProductSlices',
    initialState,
    extraReducers:(build)=>{
        build.addCase(getDetailProductData.fulfilled,(state,{payload})=>{
            state.data=payload
        })
    }
});
export default getDetailProductSlices;