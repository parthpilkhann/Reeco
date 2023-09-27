import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductDataItem } from "../components/utils";

interface ProductDataItemState {
  items: ProductDataItem[];
}

const initialState: ProductDataItemState = {
  items: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ProductDataItem[]>) => {
      state.items = action.payload;
    },
    // TODO: merge both reducers and make it one
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
    changeState: (
      state,
      action: PayloadAction<{
        id: string;
        newStates: { newPrice: number; newQuantity: number; newReason: string };
      }>
    ) => {
      const { id, newStates } = action.payload;
      console.log("begin", id, newStates);
      let itemToUpdate = state.items.find((item) => item.id === id);
      const price = newStates.newPrice;
      const quantity = newStates.newQuantity;
      const reason = newStates.newReason;
      const temp = { price, quantity, reason };
      if (itemToUpdate) {
        itemToUpdate = {
          ...itemToUpdate,
          ...temp,
        };
        console.log("end", itemToUpdate);
      }
    },
  },
});

export const { changeStatus, changeState, setData } = dataSlice.actions;
export default dataSlice.reducer;
