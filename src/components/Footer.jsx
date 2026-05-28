export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Aditya Eats</h2>
          <p className="text-sm">Delivering the best food from your favorite restaurants, hot and fresh, straight to your door.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-brand transition">Home</a></li>
            <li><a href="/about" className="hover:text-brand transition">About Us</a></li>
            <li><a href="/login" className="hover:text-brand transition">Partner with us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">Email: support@adityaeats.com</p>
          <p className="text-sm mt-2">Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Aditya Eats. All rights reserved.</p>
      </div>
    </footer>
  );
}