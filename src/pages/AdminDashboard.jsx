import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PlusCircle, Image as ImageIcon, Utensils,
    ShoppingBag, Star, TrendingUp, Upload,
    Trash2, CheckCircle,
} from 'lucide-react';
import { useRestaurants } from '../context/RestaurantContext';

// ── helpers ──────────────────────────────────────────────
const EMPTY_RESTAURANT = {
    name: '',
    cuisines: '',
    location: '',
    costForTwo: '',
    deliveryTime: '',
    deliveryFee: '',
    discount: '',
    rating: '',
    image: '',
};

const EMPTY_MENU_ITEM = {
    name: '',
    price: '',
    description: '',
    image: '',
};

export default function AdminDashboard() {
    const { allRestaurants, addRestaurant } = useRestaurants();
    const navigate = useNavigate();

    const [form, setForm] = useState(EMPTY_RESTAURANT);
    const [menuItems, setMenuItems] = useState([{ ...EMPTY_MENU_ITEM, _key: Date.now() }]);
    const [saved, setSaved] = useState(false);
    const [errors, setErrors] = useState({});

    // ── form field change ─────────────────────────────────
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    // ── menu item change ──────────────────────────────────
    const handleMenuChange = (index, e) => {
        const { name, value } = e.target;
        setMenuItems((prev) =>
            prev.map((item, i) => (i === index ? { ...item, [name]: value } : item))
        );
    };

    const addMenuItem = () =>
        setMenuItems((prev) => [...prev, { ...EMPTY_MENU_ITEM, _key: Date.now() }]);

    const removeMenuItem = (index) =>
        setMenuItems((prev) => prev.filter((_, i) => i !== index));

    // ── validation ────────────────────────────────────────
    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Restaurant name is required';
        if (!form.cuisines.trim()) e.cuisines = 'At least one cuisine is required';
        if (!form.location.trim()) e.location = 'Location is required';
        if (!form.image.trim()) e.image = 'Cover image URL is required';
        if (!form.deliveryTime || isNaN(Number(form.deliveryTime)))
            e.deliveryTime = 'Valid delivery time required';
        if (!form.rating || isNaN(Number(form.rating)) || form.rating > 5)
            e.rating = 'Rating must be a number ≤ 5';

        menuItems.forEach((item, i) => {
            if (!item.name.trim()) e[`menu_name_${i}`] = 'Item name required';
            if (!item.price || isNaN(Number(item.price)))
                e[`menu_price_${i}`] = 'Valid price required';
        });

        setErrors(e);
        return Object.keys(e).length === 0;
    };

    // ── submit ────────────────────────────────────────────
    const handleSubmit = () => {
        if (!validate()) return;

        const newRestaurant = {
            ...form,
            cuisines: form.cuisines.split(',').map((c) => c.trim()).filter(Boolean),
            deliveryTime: Number(form.deliveryTime),
            rating: Number(form.rating),
            costForTwo: form.costForTwo || '₹500 for two',
            deliveryFee: form.deliveryFee || 'Free Delivery',
            discount: form.discount || '20% OFF',
            menu: menuItems
                .filter((item) => item.name.trim())
                .map((item, index) => ({
                    id: Date.now() + index,
                    name: item.name,
                    price: Number(item.price),
                    description: item.description,
                    image: item.image ||
                        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',
                })),
        };

        const newId = addRestaurant(newRestaurant);

        setSaved(true);
        setTimeout(() => {
            setSaved(false);
            setForm(EMPTY_RESTAURANT);
            setMenuItems([{ ...EMPTY_MENU_ITEM, _key: Date.now() }]);
            navigate(`/restaurant/${newId}`);
        }, 1800);
    };

    // ── stat cards (dynamic count) ─────────────────────────
    const stats = [
        {
            icon: <Utensils className="text-orange-400 w-7 h-7" />,
            bg: 'bg-orange-500/20',
            label: 'Total Restaurants',
            value: allRestaurants.length,
            trend: '+12%',
        },
        {
            icon: <ShoppingBag className="text-green-400 w-7 h-7" />,
            bg: 'bg-green-500/20',
            label: 'Total Orders',
            value: '1.2K',
            trend: '+28%',
        },
        {
            icon: <Star className="text-yellow-400 w-7 h-7" />,
            bg: 'bg-yellow-500/20',
            label: 'Average Rating',
            value: '4.8',
            trend: '+6%',
        },
        {
            icon: <TrendingUp className="text-red-400 w-7 h-7" />,
            bg: 'bg-red-500/20',
            label: 'Revenue',
            value: '₹85K',
            trend: '+18%',
        },
    ];

    // ── shared input class ────────────────────────────────
    const inputCls =
        'w-full px-5 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all';

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-20 px-4">
            {/* BG */}
            <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950 to-slate-950" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="mb-12">
                    <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
                        Restaurant Dashboard
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Manage restaurants, menus, and orders professionally
                    </p>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center`}>
                                    {s.icon}
                                </div>
                                <span className="text-green-400 text-sm font-bold">{s.trend}</span>
                            </div>
                            <h3 className="text-slate-400 font-medium mb-2">{s.label}</h3>
                            <p className="text-4xl font-black text-white">{s.value}</p>
                        </div>
                    ))}
                </div>

                {/* ── ADD RESTAURANT FORM ── */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl mb-12">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl">
                            <PlusCircle className="text-white w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white">Add New Restaurant</h2>
                            <p className="text-slate-400 mt-1">Create and publish a new restaurant listing</p>
                        </div>
                    </div>

                    {/* SUCCESS BANNER */}
                    {saved && (
                        <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 rounded-2xl px-6 py-4 mb-8">
                            <CheckCircle className="w-6 h-6 shrink-0" />
                            <span className="font-semibold">
                                Restaurant saved! Redirecting to listing…
                            </span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {/* NAME */}
                        <Field label="Restaurant Name" error={errors.name}>
                            <input name="name" value={form.name} onChange={handleChange}
                                placeholder="e.g. Spice Garden" className={inputCls} />
                        </Field>

                        {/* CUISINES */}
                        <Field label="Cuisines (comma-separated)" error={errors.cuisines}>
                            <input name="cuisines" value={form.cuisines} onChange={handleChange}
                                placeholder="Indian, Chinese, Italian" className={inputCls} />
                        </Field>

                        {/* LOCATION */}
                        <Field label="Location" error={errors.location}>
                            <input name="location" value={form.location} onChange={handleChange}
                                placeholder="e.g. Pune, Maharashtra" className={inputCls} />
                        </Field>

                        {/* COST FOR TWO */}
                        <Field label="Cost For Two">
                            <input name="costForTwo" value={form.costForTwo} onChange={handleChange}
                                placeholder="₹500 for two" className={inputCls} />
                        </Field>

                        {/* DELIVERY TIME */}
                        <Field label="Delivery Time (mins)" error={errors.deliveryTime}>
                            <input name="deliveryTime" type="number" value={form.deliveryTime}
                                onChange={handleChange} placeholder="30" className={inputCls} />
                        </Field>

                        {/* DELIVERY FEE */}
                        <Field label="Delivery Fee">
                            <input name="deliveryFee" value={form.deliveryFee} onChange={handleChange}
                                placeholder="Free Delivery" className={inputCls} />
                        </Field>

                        {/* DISCOUNT */}
                        <Field label="Discount Badge">
                            <input name="discount" value={form.discount} onChange={handleChange}
                                placeholder="50% OFF" className={inputCls} />
                        </Field>

                        {/* RATING */}
                        <Field label="Rating (out of 5)" error={errors.rating}>
                            <input name="rating" type="number" step="0.1" max="5"
                                value={form.rating} onChange={handleChange}
                                placeholder="4.5" className={inputCls} />
                        </Field>

                        {/* COVER IMAGE URL */}
                        <div className="md:col-span-2">
                            <Field label="Cover Image URL" error={errors.image}>
                                <div className="flex items-center rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/70 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition-all">
                                    <div className="px-5 text-slate-500">
                                        <ImageIcon className="w-6 h-6" />
                                    </div>
                                    <input name="image" value={form.image} onChange={handleChange}
                                        placeholder="https://images.unsplash.com/..."
                                        className="w-full px-4 py-4 bg-transparent text-white placeholder-slate-500 outline-none" />
                                </div>
                            </Field>
                        </div>

                        {/* IMAGE PREVIEW */}
                        {form.image && (
                            <div className="md:col-span-2">
                                <p className="text-sm font-bold text-slate-300 mb-3 ml-1">Image Preview</p>
                                <img
                                    src={form.image}
                                    alt="preview"
                                    className="w-full h-52 object-cover rounded-2xl border border-slate-700"
                                    onError={(e) => (e.target.style.display = 'none')}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* ── MENU ITEMS SECTION ── */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl mb-8">
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2">Menu Items</h2>
                            <p className="text-slate-400">Add items that will appear in this restaurant's menu</p>
                        </div>
                        <button
                            onClick={addMenuItem}
                            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all"
                        >
                            <PlusCircle className="w-5 h-5" /> Add Item
                        </button>
                    </div>

                    <div className="space-y-6">
                        {menuItems.map((item, index) => (
                            <div
                                key={item._key}
                                className="bg-slate-900/60 border border-slate-700 rounded-3xl p-6"
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <span className="text-orange-400 font-bold text-sm uppercase tracking-widest">
                                        Item #{index + 1}
                                    </span>
                                    {menuItems.length > 1 && (
                                        <button
                                            onClick={() => removeMenuItem(index)}
                                            className="text-slate-500 hover:text-red-400 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <Field label="Item Name" error={errors[`menu_name_${index}`]}>
                                        <input name="name" value={item.name}
                                            onChange={(e) => handleMenuChange(index, e)}
                                            placeholder="e.g. Butter Chicken" className={inputCls} />
                                    </Field>

                                    <Field label="Price (₹)" error={errors[`menu_price_${index}`]}>
                                        <input name="price" type="number" value={item.price}
                                            onChange={(e) => handleMenuChange(index, e)}
                                            placeholder="349" className={inputCls} />
                                    </Field>

                                    <div className="md:col-span-2">
                                        <Field label="Description">
                                            <input name="description" value={item.description}
                                                onChange={(e) => handleMenuChange(index, e)}
                                                placeholder="Short description of the dish"
                                                className={inputCls} />
                                        </Field>
                                    </div>

                                    <div className="md:col-span-2">
                                        <Field label="Image URL (optional)">
                                            <input name="image" value={item.image}
                                                onChange={(e) => handleMenuChange(index, e)}
                                                placeholder="https://images.unsplash.com/..."
                                                className={inputCls} />
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SAVE BUTTON */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        disabled={saved}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {saved ? '✓ Saved!' : 'Save Restaurant & Menu'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── tiny helper component ─────────────────────────────────
function Field({ label, error, children }) {
    return (
        <div>
            <label className="block text-sm font-bold text-slate-300 mb-3 ml-1">
                {label}
            </label>
            {children}
            {error && (
                <p className="text-red-400 text-xs mt-2 ml-1">{error}</p>
            )}
        </div>
    );
}