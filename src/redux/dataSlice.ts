import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductDataItem, data } from "../components/utils";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: data, // Your data goes here
  },
  reducers: {
    setData: (state, action: PayloadAction<ProductDataItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
