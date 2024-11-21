import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface ProductState {
  products: Product[]; 
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload); // Add a new product to the array
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload; // Update product if it exists
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(product => product.id !== action.payload); // Remove product by ID
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
