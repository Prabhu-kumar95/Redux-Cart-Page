import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";

const initialState = {
  products: storeData,
  quantity: 0,
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    incrementquantity: (state, { payload }) => {
      const item = state.products.find((item) => item.title === payload.title);
      item.quantity++;
    },
    decrementquantity: (state, { payload }) => {
      const item = state.products.find((item) => item.title === payload.title);
      item.quantity--;
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item.title !== payload.title
      );
    },
    updateTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.products.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});
export const { incrementquantity, decrementquantity, removeItem, updateTotal } =
  basketSlice.actions;
export default basketSlice.reducer;
