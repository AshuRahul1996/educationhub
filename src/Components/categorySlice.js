import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCategory = createAsyncThunk("category/fetchCategory", () => {
  var res = axios.get("https://dummyjson.com/products/categories");
  return res;
});
const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    arrCategory: [],
    error: "",
    selectedCategory: "Categories",
    selectedSlug: "Categories",
  },
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    changeSlug: (state, action) => {
      state.selectedSlug = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.loading = true;
      state.arrCategory = [];
      state.error = "";
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.arrCategory = action.payload.data; //action.payload=response
      state.error = "";
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.arrCategory = [];
    });
  },
});
export default categorySlice.reducer;
export const { changeCategory, changeSlug } = categorySlice.actions;
