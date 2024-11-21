import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[]; 
}

const initialState: CartState = {
  items: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<{ productId: string; quantity: number }>) {
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {

        state.items.push(action.payload);
      }
    },
    updateItemQuantity(state, action: PayloadAction<{ productId: string; quantity: number }>) {
      const item = state.items.find(item => item.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.productId !== action.payload);
    },
  },
});

export const { addItemToCart, updateItemQuantity, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
