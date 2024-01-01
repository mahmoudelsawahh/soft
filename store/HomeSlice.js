import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Url = "https://delta.deltawy.com";

const HomeSlice = createSlice({
  name: "Home",
  initialState: {
    isLoading: false,
    error: null,
    ArticalsArr: null,
    VideosArr: null,
    ALlServicesArr: null,
    TeamArr: null,
    SiteArr: null,
    AppsArr: null,
    Url: "https://delta.deltawy.com",
    salarySlice: 0,
  },
  reducers: {
  },
});
export const { getSalary } = HomeSlice.actions;

export default HomeSlice.reducer;
