import { createSlice } from '@reduxjs/toolkit';
import spiceRouteImg from '../assets/images/SpiceRouteHotelimg.avif'; 

const initialState = {
  restaurants: [
    { id: 1, name: "The Spice Route", rating: 4.5, deliveryTime: 30, cuisines: "North Indian, Biryani", image: spiceRouteImg },
    { id: 2, name: "Bella Italia", rating: 4.8, deliveryTime: 45, cuisines: "Italian, Pizzas, Pastas", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop" },
    { id: 3, name: "Burger Cartel", rating: 4.2, deliveryTime: 25, cuisines: "Burgers, Fast Food, Beverages", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop" },
  ]
};  

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurants.unshift(action.payload); // Adds new restaurant to the start
    }
  }
});

export const { addRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;