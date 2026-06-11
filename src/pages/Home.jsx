import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import RestaurantCard from '../components/RestaurantCard';
import { useRestaurants } from '../context/RestaurantContext';


export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { allRestaurants } = useRestaurants();

    const categories = useMemo(() => [
    'All',
    ...new Set(allRestaurants.flatMap((r) => r.cuisines)),
], [allRestaurants]);

    const suggestions = useMemo(() => {

        if (!searchTerm.trim()) return [];

        const search = searchTerm.toLowerCase();

        const restaurantSuggestions = allRestaurants
            .filter((r) => r.name.toLowerCase().includes(search))
            .map((r) => r.name);

        const cuisineSuggestions = allRestaurants
            .flatMap((r) => r.cuisines)
            .filter((c) => c.toLowerCase().includes(search));

        return [...new Set([
            ...restaurantSuggestions,
            ...cuisineSuggestions,
        ])].slice(0, 5);

    }, [searchTerm, allRestaurants]);

    const filteredRestaurants = useMemo(() => {
        return allRestaurants.filter((r) => {
            const matchesSearch =
                r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                r.cuisines.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory =
                selectedCategory === 'All' || r.cuisines.includes(selectedCategory);

            return matchesSearch && matchesCategory;
        });

    }, [searchTerm, selectedCategory, allRestaurants]);

    return (
        <main className="min-h-screen pb-12 bg-slate-950 text-white">

            {/* HERO SECTION */}
            <section className="relative h-[75vh] flex items-center justify-center mb-16 pt-24">

                {/* BACKGROUND IMAGE */}
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                    alt="Food Banner"
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-950" />

                {/* HERO CONTENT */}
                <div className="relative z-10 text-center px-4 w-full max-w-4xl">

                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.95] drop-shadow-2xl">
                        Discover the best food
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-slate-200">
                        Find restaurants, cuisines, and dishes instantly
                    </p>

                    {/* SEARCH CONTAINER */}
                    <div className="relative max-w-2xl mx-auto">

                        {/* SEARCH BAR */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 flex items-center shadow-2xl border border-white/10 hover:border-orange-400/40 focus-within:border-orange-500 transition-all duration-300">

                            <Search className="text-orange-400 ml-4 w-6 h-6 shrink-0" />

                            <input
                                type="text"
                                placeholder="Search restaurants or cuisines..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-4 bg-transparent outline-none text-lg placeholder-slate-400"
                            />
                        </div>

                        {/* SUGGESTIONS DROPDOWN */}
                        {suggestions.length > 0 && (

                            <div className="absolute top-full left-0 right-0 mt-3 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl max-h-80 overflow-y-auto shadow-2xl z-50">

                                {suggestions.map((suggestion) => (

                                    <button
                                        key={suggestion}
                                        onClick={() => setSearchTerm(suggestion)}
                                        className="w-full text-left px-5 py-4 hover:bg-slate-800 hover:pl-7 transition-all duration-200 border-b border-slate-800 last:border-none"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* RESTAURANTS SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                    <div>
                        <h2 className="text-3xl font-bold">
                            Top restaurants for you
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Discover restaurants based on your taste
                        </p>
                    </div>

                    {/* RESULTS */}
                    <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-slate-300 text-sm font-medium w-fit">
                        {filteredRestaurants.length} Results Found
                    </div>
                </div>

                {/* CATEGORY CHIPS */}
                <div className="flex gap-3 overflow-x-auto pb-5 mb-10 scrollbar-hide">

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300
                        
                        ${selectedCategory === category
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* RESTAURANTS GRID */}
                {filteredRestaurants.length > 0 ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filteredRestaurants.map((restaurant) => (

                            <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant}
                            />
                        ))}
                    </div>

                ) : (

                    /* EMPTY STATE */
                    <div className="flex flex-col items-center justify-center py-24 text-center">

                        <h3 className="text-3xl font-bold mb-3">
                            No Restaurants Found
                        </h3>

                        <p className="text-slate-400 text-lg">
                            Try searching for pizza, burgers, biryani...
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}