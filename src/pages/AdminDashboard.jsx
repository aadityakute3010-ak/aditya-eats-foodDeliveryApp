import {
    PlusCircle,
    Image as ImageIcon,
    Utensils,
    ShoppingBag,
    Star,
    TrendingUp,
    Upload,
} from 'lucide-react';

export default function AdminDashboard() {

    return (

        <div className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-20 px-4">

            {/* BACKGROUND IMAGE */}
            <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000&auto=format&fit=crop"
                alt="Restaurant Background"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950 to-slate-950" />

            {/* GLOW EFFECTS */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full" />

            <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500/10 blur-[120px] rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* PAGE HEADER */}
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

                    {/* CARD 1 */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                        <div className="flex items-center justify-between mb-5">

                            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">

                                <Utensils className="text-orange-400 w-7 h-7" />
                            </div>

                            <span className="text-green-400 text-sm font-bold">
                                +12%
                            </span>
                        </div>

                        <h3 className="text-slate-400 font-medium mb-2">
                            Total Restaurants
                        </h3>

                        <p className="text-4xl font-black text-white">
                            6
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                        <div className="flex items-center justify-between mb-5">

                            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">

                                <ShoppingBag className="text-green-400 w-7 h-7" />
                            </div>

                            <span className="text-green-400 text-sm font-bold">
                                +28%
                            </span>
                        </div>

                        <h3 className="text-slate-400 font-medium mb-2">
                            Total Orders
                        </h3>

                        <p className="text-4xl font-black text-white">
                            1.2K
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                        <div className="flex items-center justify-between mb-5">

                            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center">

                                <Star className="text-yellow-400 w-7 h-7" />
                            </div>

                            <span className="text-green-400 text-sm font-bold">
                                +6%
                            </span>
                        </div>

                        <h3 className="text-slate-400 font-medium mb-2">
                            Average Rating
                        </h3>

                        <p className="text-4xl font-black text-white">
                            4.8
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                        <div className="flex items-center justify-between mb-5">

                            <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">

                                <TrendingUp className="text-red-400 w-7 h-7" />
                            </div>

                            <span className="text-green-400 text-sm font-bold">
                                +18%
                            </span>
                        </div>

                        <h3 className="text-slate-400 font-medium mb-2">
                            Revenue
                        </h3>

                        <p className="text-4xl font-black text-white">
                            ₹85K
                        </p>
                    </div>
                </div>

                {/* ADD RESTAURANT CARD */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl mb-12">

                    <div className="flex items-center gap-4 mb-10">

                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl">

                            <PlusCircle className="text-white w-8 h-8" />
                        </div>

                        <div>

                            <h2 className="text-3xl font-black text-white">
                                Add New Restaurant
                            </h2>

                            <p className="text-slate-400 mt-1">
                                Create and publish a new restaurant listing
                            </p>
                        </div>
                    </div>

                    {/* FORM */}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-7">

                        {/* NAME */}
                        <div>

                            <label className="block text-sm font-bold text-slate-300 mb-3 ml-1">
                                Restaurant Name
                            </label>

                            <input
                                type="text"
                                placeholder="e.g. Spice Garden"
                                className="w-full px-5 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                            />
                        </div>

                        {/* CUISINES */}
                        <div>

                            <label className="block text-sm font-bold text-slate-300 mb-3 ml-1">
                                Cuisines
                            </label>

                            <input
                                type="text"
                                placeholder="Indian, Chinese, Italian"
                                className="w-full px-5 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                            />
                        </div>

                        {/* IMAGE URL */}
                        <div className="md:col-span-2">

                            <label className="block text-sm font-bold text-slate-300 mb-3 ml-1">
                                Cover Image URL
                            </label>

                            <div className="flex items-center rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/70 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10 transition-all">

                                <div className="px-5 text-slate-500">
                                    <ImageIcon className="w-6 h-6" />
                                </div>

                                <input
                                    type="text"
                                    placeholder="https://images.unsplash.com/..."
                                    className="w-full px-4 py-4 bg-transparent text-white placeholder-slate-500 outline-none"
                                />
                            </div>
                        </div>

                        {/* UPLOAD AREA */}
                        <div className="md:col-span-2">

                            <div className="border-2 border-dashed border-slate-700 rounded-3xl p-12 text-center hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 cursor-pointer group">

                                <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">

                                    <Upload className="w-10 h-10 text-orange-400" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Upload Restaurant Banner
                                </h3>

                                <p className="text-slate-400 max-w-lg mx-auto">
                                    Drag and drop your image here or click to browse files
                                </p>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="md:col-span-2 flex justify-end">

                            <button
                                type="button"
                                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                            >
                                Save Restaurant
                            </button>
                        </div>
                    </form>
                </div>

                {/* MANAGE MENU */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl">

                    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

                        <div>

                            <h2 className="text-3xl font-black text-white mb-2">
                                Manage Menu Items
                            </h2>

                            <p className="text-slate-400">
                                Add, edit, and organize restaurant menu items
                            </p>
                        </div>

                        <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                            View All Items
                        </button>
                    </div>

                    {/* EMPTY AREA */}
                    <div className="border-2 border-dashed border-slate-700 rounded-[32px] p-16 text-center hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-300 cursor-pointer group">

                        <div className="w-24 h-24 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">

                            <PlusCircle className="w-12 h-12 text-orange-400" />
                        </div>

                        <h3 className="text-3xl font-black text-white mb-4">
                            Add New Menu Item
                        </h3>

                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Include item name, price, category, description, image,
                            preparation time, and availability status.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}