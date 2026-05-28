import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from '../redux/cartSlice';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  CreditCard,
  ShieldCheck,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Cart() {

  const { items, totalAmount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const deliveryFee = 40;

  const gst = totalAmount * 0.05;

  const grandTotal = totalAmount + deliveryFee + gst;

  const handlePayment = () => {

    toast.success('Payment Successful 🎉 Order Placed!', {
      duration: 3000,
      style: {
        background: '#0f172a',
        color: '#fff',
        border: '1px solid #334155',
        padding: '16px',
        borderRadius: '16px',
      },
      iconTheme: {
        primary: '#22c55e',
        secondary: '#fff',
      },
    });

    dispatch(clearCart());
  };

  if (items.length === 0) {

    return (

      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-slate-950">

        <div className="bg-slate-900/80 backdrop-blur-xl p-10 rounded-full mb-8 border border-slate-800 shadow-2xl">

          <ShoppingCart className="w-24 h-24 text-slate-700" />
        </div>

        <h2 className="text-4xl font-black text-white mb-4">
          Your cart is empty
        </h2>

        <p className="text-slate-400 mb-10 max-w-md text-lg leading-relaxed">
          Looks like you haven’t added anything yet. Discover amazing dishes from top restaurants.
        </p>

        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold shadow-2xl shadow-orange-500/20 transition-all duration-300 hover:scale-105"
        >
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (

    <div className="max-w-7xl mx-auto px-4 pt-36 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT SECTION */}
      <div className="lg:col-span-2">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-4xl font-black text-white mb-2">
              Your Order
            </h2>

            <p className="text-slate-400">
              Review your delicious items before checkout
            </p>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="flex items-center gap-2 text-red-400 hover:text-red-500 transition-all font-semibold"
          >
            <Trash2 className="w-5 h-5" />
            Clear Cart
          </button>
        </div>

        {/* ITEMS */}
        <div className="space-y-6">

          {items.map((item) => (

            <div
              key={item.id}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-5 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300"
            >

              <div className="flex flex-col md:flex-row gap-6">

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-2xl w-full md:w-44 h-40 flex-shrink-0">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* INFO */}
                <div className="flex-1">

                  <div className="flex justify-between gap-4">

                    <div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.name}
                      </h3>

                      <p className="text-slate-400 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <p className="text-2xl font-black text-orange-400 whitespace-nowrap">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex items-center justify-between mt-8">

                    <p className="text-slate-500 font-medium">
                      ₹{item.price} each
                    </p>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-4 bg-slate-950 border border-slate-700 rounded-2xl px-4 py-2">

                      <button
                        onClick={() => dispatch(removeItem(item))}
                        className="text-slate-400 hover:text-red-400 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>

                      <span className="text-white font-bold text-lg w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(addItem(item))}
                        className="text-slate-400 hover:text-green-400 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="sticky top-28 h-fit">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          {/* TITLE */}
          <div className="flex items-center gap-3 mb-8">

            <div className="bg-orange-500/10 p-3 rounded-2xl">

              <CreditCard className="w-6 h-6 text-orange-400" />
            </div>

            <div>

              <h3 className="text-2xl font-black text-white">
                Bill Details
              </h3>

              <p className="text-slate-400 text-sm">
                Secure payment checkout
              </p>
            </div>
          </div>

          {/* BILL */}
          <div className="space-y-5 border-b border-slate-800 pb-8">

            <div className="flex justify-between text-slate-400">
              <span>Item Total</span>
              <span className="text-white font-semibold">
                ₹{totalAmount}
              </span>
            </div>

            <div className="flex justify-between text-slate-400">
              <span>Delivery Fee</span>
              <span className="text-green-400 font-semibold">
                ₹{deliveryFee}
              </span>
            </div>

            <div className="flex justify-between text-slate-400">
              <span>GST & Charges</span>
              <span className="text-white font-semibold">
                ₹{gst.toFixed(2)}
              </span>
            </div>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between items-center py-8">

            <span className="text-2xl font-black text-white">
              To Pay
            </span>

            <span className="text-3xl font-black text-orange-400">
              ₹{grandTotal.toFixed(2)}
            </span>
          </div>

          {/* PAYMENT BUTTON */}
          <button
            onClick={handlePayment}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-orange-500/20 hover:scale-[1.02]"
          >
            Proceed To Pay
          </button>

          {/* SECURITY */}
          <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-sm">

            <ShieldCheck className="w-4 h-4" />

            <span>100% Secure Payments</span>
          </div>
        </div>
      </div>
    </div>
  );
}