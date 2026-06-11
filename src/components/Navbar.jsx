import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, LogOut } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import logoImg from '../assets/images/logo.png';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Navbar() {

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { items } = useSelector(state => state.cart);
  const { isLoggedIn, role } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {

    Swal.fire({
      title: 'Logout?',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f97316',
      cancelButtonColor: '#334155',
      confirmButtonText: 'Yes, Logout',
      background: '#0f172a',
      color: '#fff',
      borderRadius: '20px',
    }).then((result) => {

      if (result.isConfirmed) {

        dispatch(logout());

        Swal.fire({
          title: 'Logged Out',
          text: 'You have been logged out successfully',
          icon: 'success',
          confirmButtonColor: '#f97316',
          background: '#0f172a',
          color: '#fff',
          timer: 1500,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate('/');
        }, 1600);
      }
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-20 items-center">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-16 h-16 overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img
                src={logoImg}
                alt="Aditya Eats Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-2xl font-black text-orange-500 tracking-tighter uppercase italic">
              Aditya Eats
            </span>
          </Link>

          {/* NAV ITEMS */}
          <div className="flex items-center gap-8 font-medium text-slate-300">

            <Link
              to="/"
              className="hover:text-orange-400 transition-all duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-orange-400 transition-all duration-300"
            >
              About
            </Link>

            {role === 'admin' && (
              <Link
                to="/admin"
                className="hover:text-orange-400 transition-all duration-300"
              >
                Admin Panel
              </Link>
            )}

            {/* CART */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center hover:text-orange-400 transition-all duration-300"
            >
              <ShoppingBag className="w-6 h-6" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 flex items-center justify-center rounded-full bg-orange-500 text-white text-[11px] font-bold shadow-lg border border-slate-900">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* LOGIN / LOGOUT */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 hover:text-orange-400 transition-all duration-300"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 hover:text-orange-400 transition-all duration-300"
              >
                <User className="w-5 h-5" />
                Login
              </Link>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}