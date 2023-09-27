import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductDataItem, data } from "../components/utils";

interface ProductDataItemState {
  items: ProductDataItem[];
}

const initialState: ProductDataItemState = {
  items: data,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ProductDataItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
