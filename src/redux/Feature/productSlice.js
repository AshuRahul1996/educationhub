import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  var res = axios.get("https://dummyjson.com/products?limit=0");
  return res;
});
const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    arrProducts: [],
    error: "",
    selectRange: [
      { min: 0, max: 50 },
      { min: 50, max: 100 },
      { min: 100, max: 200 },
      { min: 200, max: 500 },
      { min: 500, max: 5000 },
    ],
    selectedRange: { min: 0, max: Number.MAX_VALUE },
  },
  reducers: {
    changeRange : (state, action) => {
      state.selectedRange = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.arrProducts = [];
      state.error = "";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.arrProducts = action.payload.data.products; //action.payload=response
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.arrProducts = [];
      state.error = action.payload;
    });
  },
});
export default productsSlice.reducer;
export const { changeRange } = productsSlice.actions;
