import { useNavigate } from 'react-router-dom';

import {
    Globe,
    Users,
    UtensilsCrossed,
    Star,
    ArrowRight,
    ChefHat,
    Clock3,
    ShieldCheck,
} from 'lucide-react';

export default function About() {

    const stats = [
        {
            title: '10M+',
            subtitle: 'Monthly Orders',
            icon: <UtensilsCrossed className="w-8 h-8" />,
        },
        {
            title: '500+',
            subtitle: 'Cities Worldwide',
            icon: <Globe className="w-8 h-8" />,
        },
        {
            title: '20K+',
            subtitle: 'Restaurant Partners',
            icon: <Users className="w-8 h-8" />,
        },
    ];

    const features = [
        {
            title: 'Fast Delivery',
            description:
                'Lightning-fast delivery with real-time tracking and secure packaging.',
            icon: <Clock3 className="w-7 h-7" />,
        },
        {
            title: 'Top Rated Restaurants',
            description:
                'Discover highly rated restaurants and trending dishes near you.',
            icon: <Star className="w-7 h-7" />,
        },
        {
            title: 'Trusted Experience',
            description:
                'Safe payments, reliable service, and premium food experiences.',
            icon: <ShieldCheck className="w-7 h-7" />,
        },
    ];
    const navigate = useNavigate();
    return (

        <main className="bg-slate-950 text-white overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center px-4">

                {/* BACKGROUND IMAGE */}
                <img
                    src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2070&auto=format&fit=crop"
                    alt="Restaurant Dining"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70" />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-black/50 to-slate-950" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-6xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-semibold mb-8">
                        <ChefHat className="w-5 h-5" />
                        About Aditya Eats
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

                        Delivering
                        <span className="block text-orange-500">
                            happiness through food
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-12">

                        For over a decade, Aditya Eats has been connecting food lovers
                        with the best restaurants and unforgettable dining experiences.
                        We help millions discover new tastes, cuisines, and moments
                        every single day.
                    </p>

                    <button onClick={() => navigate('/')} className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">

                        Explore Restaurants

                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="max-w-7xl mx-auto px-4 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <div>

                        <p className="text-orange-400 font-bold uppercase tracking-[0.25em] mb-5">
                            Our Story
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">

                            Built for food lovers,
                            <span className="text-orange-500">
                                {" "}by food lovers
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-6">

                            Aditya Eats started with one simple mission:
                            make discovering and ordering amazing food effortless,
                            exciting, and enjoyable for everyone.
                        </p>

                        <p className="text-slate-400 text-lg leading-relaxed mb-10">

                            From cozy cafes to luxury restaurants,
                            we bring the best food experiences together
                            on one modern platform designed for speed,
                            convenience, and quality.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-5">

                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-orange-500/30 transition-all">
                                <h3 className="text-3xl font-black text-orange-500 mb-2">
                                    99%
                                </h3>

                                <p className="text-slate-400">
                                    Customer satisfaction rate
                                </p>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-orange-500/30 transition-all">
                                <h3 className="text-3xl font-black text-orange-500 mb-2">
                                    24/7
                                </h3>

                                <p className="text-slate-400">
                                    Delivery and support service
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="relative">

                        <div className="grid grid-cols-2 gap-5">

                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                                alt="Restaurant"
                                className="h-[500px] w-full object-cover rounded-3xl shadow-2xl"
                            />

                            <div className="space-y-5">

                                <img
                                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                                    alt="Chef"
                                    className="h-[240px] w-full object-cover rounded-3xl shadow-2xl"
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
                                    alt="Food"
                                    className="h-[240px] w-full object-cover rounded-3xl shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* FLOATING CARD */}
                        <div className="absolute -bottom-10 left-10 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-xs">

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center">
                                    <ChefHat className="w-7 h-7 text-white" />
                                </div>

                                <div>
                                    <h4 className="font-bold text-xl">
                                        Premium Quality
                                    </h4>

                                    <p className="text-slate-400 text-sm">
                                        Curated restaurant experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="max-w-7xl mx-auto px-4 pb-24">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {stats.map((stat, index) => (

                        <div
                            key={index}
                            className="group bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-500 shadow-xl"
                        >

                            <div className="w-20 h-20 rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform">

                                {stat.icon}
                            </div>

                            <h3 className="text-5xl font-black text-white mb-3">
                                {stat.title}
                            </h3>

                            <p className="text-slate-400 text-lg">
                                {stat.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="bg-slate-900/40 border-y border-slate-800">

                <div className="max-w-7xl mx-auto px-4 py-24">

                    <div className="text-center mb-16">

                        <p className="text-orange-400 font-bold uppercase tracking-[0.25em] mb-5">
                            Why Choose Us
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Experience the future of food delivery
                        </h2>

                        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                            Everything you need for the ultimate food ordering experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {features.map((feature, index) => (

                            <div
                                key={index}
                                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/40 transition-all duration-300"
                            >

                                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">

                                    {feature.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative py-28 px-4 overflow-hidden">

                <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
                    alt="Food Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">

                    <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">

                        Ready to order
                        <span className="block text-orange-500">
                            your favorite food?
                        </span>
                    </h2>

                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Discover top-rated restaurants and enjoy delicious meals
                        delivered straight to your doorstep.
                    </p>

                    <button onClick={() => navigate('/')} className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-orange-500/30 transition-all duration-300 hover:scale-105">

                        Start Ordering
                    </button>
                </div>
            </section>
        </main>
    );
}