import { useParams } from 'react-router-dom';
import { Star, Clock, Info } from 'lucide-react';

import MenuItem from '../components/MenuItem';
import { restaurants } from '../data/restaurants';

export default function RestaurantDetails() {

    const { id } = useParams();

    const restaurant = restaurants.find(
        (res) => res.id === Number(id)
    );

    if (!restaurant) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white text-3xl font-bold">
                Restaurant Not Found
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-20">

            {/* HERO IMAGE */}
            <section className="relative h-[45vh] overflow-hidden">

                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover brightness-50"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute bottom-10 left-0 right-0 max-w-6xl mx-auto px-6">

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

                        <div>
                            <h1 className="text-5xl md:text-6xl font-black mb-4">
                                {restaurant.name}
                            </h1>

                            <p className="text-xl text-slate-300 mb-2">
                                {restaurant.cuisines.join(', ')}
                            </p>

                            <p className="text-slate-400">
                                {restaurant.location}
                            </p>
                        </div>

                        {/* RATING CARD */}
                        <div className="bg-green-600 text-white p-5 rounded-2xl shadow-2xl w-fit">

                            <div className="flex items-center gap-2 text-2xl font-bold">
                                {restaurant.rating}
                                <Star className="w-5 h-5 fill-current" />
                            </div>

                            <p className="mt-2 text-sm">
                                1K+ Ratings
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILS */}
            <section className="max-w-6xl mx-auto px-6 mt-10">

                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-wrap gap-8 mb-12">

                    <div className="flex items-center gap-3">
                        <Clock className="text-orange-400" />
                        <span>{restaurant.deliveryTime} mins</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Info className="text-orange-400" />
                        <span>{restaurant.costForTwo}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-green-400 font-semibold">
                            {restaurant.deliveryFee}
                        </span>
                    </div>
                </div>

                {/* MENU */}
                <div>

                    <h2 className="text-4xl font-black mb-10">
                        Recommended Menu
                    </h2>

                    <div className="space-y-8">

                        {restaurant.menu.map((item) => (

                            <MenuItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}