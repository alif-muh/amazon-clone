import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if productExist in product array
      const addProductExists = state.products.find((product) => product.id === action.payload.id);
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({ ...action.payload, quantity: parseInt(action.payload.quantity) });
      }
      state.productsNumber = state.productsNumber + parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      // find the product removing the array
      const productToRemove = state.products.find((product) => product.id === action.payload);

      // remove the quantity from product number
      state.productsNumber = state.productsNumber - productToRemove.quantity;

      // find index of the product removing
      const index = state.products.findIndex((product) => product.id === action.payload);

      // remove from the array
      state.products.splice(index, 1);
    },
    incrementInCart: (state, action) => {
      // find the item in the cart with a matchin id
      const itemInc = state.products.find((item) => item.id === action.payload);

      // increment the item's quatity if it's at least 1
      if (itemInc.quantity >= 1) {
        itemInc.quantity = itemInc.quantity + 1;
      }

      // update the total number of products in the cart
      state.productsNumber = state.productsNumber + 1;
    },
    decrementInCart: (state, action) => {
      // find the item in the cart with matching id
      const itemDec = state.products.find((item) => item.id === action.payload);

      // check if the item's quantity is equal to 1
      if (itemDec.quantity === 1) {
        // if the quantity is =1, remove the item from the cart
        const index = state.products.findIndex((item) => item.id === action.payload);
        state.products.splice(index, 1);
      } else {
        // if the quantity is >1, decrement it by 1
        itemDec.quantity--;
      }

      // update the total number of products in the cart
      state.productsNumber = state.productsNumber - 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } = cartSlice.actions;
export default cartSlice.reducer;
