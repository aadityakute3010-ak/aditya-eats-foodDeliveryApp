import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import restaurantReducer from './restaurantSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    restaurants: restaurantReducer 
  },
}); 