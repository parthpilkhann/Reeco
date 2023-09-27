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
    // TODO: merge both reducers and make it one, the 'changeStatus' reducer can be omitted and changeState can be used intead.
    // TODO: write better reducer to check for status real-time.
    changeStatus: (
      state,
      action: PayloadAction<{ id: string; newStatus: string }>
    ) => {
      const { id, newStatus } = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      );
      return { ...state, items: updatedItems };
    },
    changeState: (
      state,
      action: PayloadAction<{
        id: string;
        newStates: { newPrice: number; newQuantity: number; newReason: string };
      }>
    ) => {
      const { id, newStates } = action.payload;
      const { newPrice, newQuantity, newReason } = newStates;
      const updatedItems = state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              price: newPrice,
              quantity: newQuantity,
              reason: newReason,
            }
          : item
      );
      return { ...state, items: updatedItems };
    },
  },
});

export const { changeStatus, changeState, setData } = dataSlice.actions;
export default dataSlice.reducer;
