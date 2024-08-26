import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.data.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.data.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
    },
    clearItems: (state) => {
      state.data = [];
    },
    deleteItem: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.data.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.data.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
