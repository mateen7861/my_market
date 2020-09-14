import { createSlice } from "@reduxjs/toolkit";
import { Smartphone } from "../components/Products";
interface Cart {
  cart: Smartphone[];
}
interface AddToCartAction {
  type: string;
  payload: Smartphone;
}

interface RemoveFromCartAction {
  type: string;
  payload: { id: number };
}
export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },

  reducers: {
    ADD: (state: Cart, action: AddToCartAction) => {
      state.cart.push(action.payload);
    },
    REMOVE: (state: Cart, action: RemoveFromCartAction) => {
      const index = state.cart.findIndex(
        (basketItem: Smartphone) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.cart];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.cart = newBasket;
    },
  },
});

export const { ADD, REMOVE } = cartSlice.actions;
export default cartSlice.reducer;
