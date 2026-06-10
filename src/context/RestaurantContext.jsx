import { createContext, useContext, useState, useEffect } from 'react';
import { restaurants as staticRestaurants } from '../data/restaurants';

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
    const [dynamicRestaurants, setDynamicRestaurants] = useState(() => {
        try {
            const saved = localStorage.getItem('admin_restaurants');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    // Merge static + dynamic; dynamic ones appear first (or last — your choice)
    const allRestaurants = [...staticRestaurants, ...dynamicRestaurants];

    const addRestaurant = (restaurant) => {
        // Generate ID beyond static range (static IDs are 1–6)
        const newId = Date.now();
        const newRestaurant = { ...restaurant, id: newId };

        setDynamicRestaurants((prev) => {
            const updated = [...prev, newRestaurant];
            localStorage.setItem('admin_restaurants', JSON.stringify(updated));
            return updated;
        });

        return newId;
    };

    const updateRestaurant = (id, updatedData) => {
        setDynamicRestaurants((prev) => {
            const updated = prev.map((r) =>
                r.id === id ? { ...r, ...updatedData } : r
            );
            localStorage.setItem('admin_restaurants', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <RestaurantContext.Provider
            value={{ allRestaurants, dynamicRestaurants, addRestaurant, updateRestaurant }}
        >
            {children}
        </RestaurantContext.Provider>
    );
}

export function useRestaurants() {
    return useContext(RestaurantContext);
}