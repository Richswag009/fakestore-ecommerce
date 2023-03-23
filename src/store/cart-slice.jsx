import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSLice",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalAmount: 0,
    quantity: 0,
    addedToCart: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newProduct = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === newProduct.id
      );
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newProduct.price;
      if (!existingItem) {
        state.products.push({
          id: newProduct.id,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
          title: newProduct.title,
          image: newProduct.image,
        });
        // state.addedToCart = !state.addedToCart;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newProduct.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem.price;
      state.addedToCart = state.addedToCart = false;

      if (existingItem.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    clearCart(state) {
      state.products = [];
      (state.totalQuantity = 0), (state.totalAmount = 0);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
