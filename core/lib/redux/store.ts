
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/productSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
