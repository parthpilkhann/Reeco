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
    changeStatus: (
      state,
      action: PayloadAction<{ id: string; newStatus: string }>
    ) => {
      const { id, newStatus } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.status = newStatus;
      }
    },
  },
});

export const { changeStatus } = dataSlice.actions;
export default dataSlice.reducer;
