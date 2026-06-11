import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import toast from 'react-hot-toast';

import {
    Star,
    Leaf,
    Flame,
    ShoppingCart,
} from 'lucide-react';

export default function MenuItem({ item }) {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            toast.error('Please login to add items to cart!');
            setTimeout(() => navigate('/login'), 1000);
            return;
        }
        setIsAdding(true);
        dispatch(addItem(item));

        toast.success(`${item.name} added to cart`, {
            style: {
                background: '#0f172a',
                color: '#fff',
                border: '1px solid #334155',
                padding: '14px 18px',
                borderRadius: '14px',
            },

            iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
            },
        });

        setTimeout(() => {
            setIsAdding(false);
        }, 700);
    };

    return (

        <div className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-500">

            <div className="flex flex-col md:flex-row">

                {/* LEFT CONTENT */}
                <div className="flex-1 p-6 md:p-8">

                    {/* BADGES */}
                    <div className="flex items-center gap-3 mb-4">

                        <span className="flex items-center gap-1 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/20">

                            <Leaf className="w-3 h-3" />

                            Bestseller
                        </span>

                        <span className="flex items-center gap-1 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold border border-orange-500/20">

                            <Flame className="w-3 h-3" />

                            Trending
                        </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">

                        {item.name}
                    </h3>

                    {/* RATING */}
                    <div className="flex items-center gap-2 mb-4">

                        <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-lg text-sm font-bold">

                            4.5

                            <Star className="w-3 h-3 fill-current" />
                        </div>

                        <span className="text-slate-400 text-sm">
                            200+ ratings
                        </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">

                        {item.description}
                    </p>

                    {/* PRICE + DELIVERY */}
                    <div className="flex flex-wrap items-center gap-6">

                        <div>

                            <p className="text-slate-500 text-sm mb-1">
                                Price
                            </p>

                            <p className="text-3xl font-black text-orange-400">

                                ₹{item.price}
                            </p>
                        </div>

                        <div>

                            <p className="text-slate-500 text-sm mb-1">
                                Delivery
                            </p>

                            <p className="text-lg font-semibold text-green-400">
                                Free Delivery
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative md:w-80 h-72 md:h-auto overflow-hidden">

                    {/* FOOD IMAGE */}
                    <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* OFFER BADGE */}
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">

                        20% OFF
                    </div>

                    {/* ADD BUTTON */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">

                        <button
                            onClick={handleAddToCart}
                            disabled={isAdding}
                            className={`flex items-center gap-2 px-8 py-3 rounded-2xl font-bold shadow-2xl transition-all duration-300
                            
                            ${
                                isAdding
                                    ? 'bg-green-500 text-white scale-95'
                                    : 'bg-white text-slate-900 hover:bg-orange-500 hover:text-white hover:scale-105'
                            }`}
                        >

                            <ShoppingCart className="w-5 h-5" />

                            {isAdding ? 'Added' : 'Add'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}