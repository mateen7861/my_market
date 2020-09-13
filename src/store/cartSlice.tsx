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
      const index = state.cart.findIndex(
        (basketItem: any) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.cart];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      state.cart = newBasket;
    },
  },
});

export const { ADD, REMOVE } = cartSlice.actions;
export default cartSlice.reducer;
