import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },

  reducers: {
    ADD: (state: any, action: any) => {
      state.cart.push(action.payload);
    },
    REMOVE: (state: any, action: any) => {
      state.cart.filter((item: any) => console.log(item));
    },
  },
});

export const { ADD, REMOVE } = cartSlice.actions;
export default cartSlice.reducer;
