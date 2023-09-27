import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/utils";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: data, // Your data goes here
  },
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;