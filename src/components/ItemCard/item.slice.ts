import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../redux";
import { TCartItem } from "../../types";

type ICartItem = TCartItem[];

const initialState: ICartItem = [];

const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      const payload = action.payload;

      const isProductInCart = state.findIndex((item) => item.id === payload);

      if (isProductInCart !== -1) {
        state[isProductInCart].amount += 1;
      } else {
        state.push({ id: payload, amount: 1 });
      }

      return state;
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const payload = action.payload;

      const isProductInCart = state.findIndex((item) => item.id === payload);

      if (state[isProductInCart].amount > 1) {
        state[isProductInCart].amount -= 1;
      } else {
        state = state.filter((product) => product.id !== action.payload);
        return state;
      }
    },
  },
});

export const getCartItems = (state: RootState) => state.item;
export const getTotalAmount = (state: RootState) => {
  const totalAmount = state.item.reduce((prev, next) => prev + next.amount, 0);
  return totalAmount;
};

export const { addItemToCart, removeItemFromCart } = itemSlice.actions;
export default itemSlice.reducer;
