import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

import {
    User,
    ShieldCheck,
    Mail,
    Lock,
    ArrowRight,
} from 'lucide-react';

export default function Login() {

    const [role, setRole] = useState('customer');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        dispatch(
            login({
                name: 'Aditya',
                role: role,
            })
        );

        navigate(role === 'admin' ? '/admin' : '/');
    };

    return (

        <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4 py-28">

            {/* BACKGROUND IMAGE */}
            <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2000&auto=format&fit=crop"
                alt="Food Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-950/90 to-slate-950" />

            {/* GLOW EFFECTS */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full" />

            <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full" />

            {/* LOGIN CARD */}
            <div className="relative z-10 w-full max-w-md">

                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[32px] p-8 md:p-10">

                    {/* TOP CONTENT */}
                    <div className="text-center mb-8">

                        <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl shadow-orange-500/30">

                            <User className="w-10 h-10 text-white" />
                        </div>

                        <h1 className="text-4xl font-black text-white mb-3 tracking-tight">
                            Welcome Back
                        </h1>

                        <p className="text-slate-400 text-lg">
                            Login to continue ordering delicious food
                        </p>
                    </div>

                    {/* ROLE SWITCH */}
                    <div className="flex bg-slate-900/70 p-1.5 rounded-2xl mb-8 border border-slate-800">

                        <button
                            type="button"
                            onClick={() => setRole('customer')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300
                            
                            ${
                                role === 'customer'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            <User className="w-4 h-4" />
                            Customer
                        </button>

                        <button
                            type="button"
                            onClick={() => setRole('admin')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all duration-300
                            
                            ${
                                role === 'admin'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            <ShieldCheck className="w-4 h-4" />
                            Admin
                        </button>
                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={handleLogin}
                        className="space-y-6"
                    >

                        {/* EMAIL */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3 ml-1">
                                Email Address
                            </label>

                            <div className="relative">

                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />

                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div>

                            <label className="block text-sm font-semibold text-slate-300 mb-3 ml-1">
                                Password
                            </label>

                            <div className="relative">

                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />

                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                                />
                            </div>
                        </div>

                        {/* LOGIN BUTTON */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-orange-500/20"
                        >

                            Login as {role === 'admin' ? 'Admin' : 'Customer'}

                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>

                    {/* FOOTER */}
                    <div className="mt-8 text-center">

                        <p className="text-slate-500">
                            New to Aditya Eats?
                        </p>

                        <button className="mt-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                            Create New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}