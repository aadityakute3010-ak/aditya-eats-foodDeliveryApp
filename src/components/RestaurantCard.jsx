import { Link } from 'react-router-dom';
import { Star, Clock, Bike } from 'lucide-react';

export default function RestaurantCard({ restaurant }) {
    const {
        id,
        name,
        image,
        cuisines,
        rating,
        deliveryTime,
        discount = "50% OFF",
        deliveryFee = "Free Delivery",
    } = restaurant;

    return (
        <Link
            to={`/restaurant/${id}`}
            className="group block overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
            {/* IMAGE SECTION */}
            <div className="relative h-60 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                        e.target.src =
                            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* DISCOUNT BADGE */}
                <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-xl shadow-lg">
                        {discount}
                    </span>
                </div>

                {/* DELIVERY TIME BADGE */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold border border-white/10">
                    {deliveryTime} min
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
                {/* TITLE + RATING */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                        <h3 className="text-xl font-bold text-white line-clamp-1 group-hover:text-orange-400 transition-colors">
                            {name}
                        </h3>

                        <p className="text-slate-400 text-sm mt-1 line-clamp-1">
                            {Array.isArray(cuisines)
                                ? cuisines.join(' • ')
                                : cuisines}
                        </p>
                    </div>

                    {/* RATING */}
                    <div className="flex items-center gap-1 bg-green-600 text-white px-2.5 py-1 rounded-lg text-sm font-bold shrink-0">
                        {rating}
                        <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                </div>

                {/* DELIVERY INFO */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-4">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span>{deliveryTime} mins</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                        <Bike className="w-4 h-4 text-orange-400" />
                        <span>{deliveryFee}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}